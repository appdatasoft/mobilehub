<template>
          <!-- using Semantic Class -->
    <div class="ui stackable six column grid">
      <!--   Left Menu     -->
      <div class="column" id="column_1">
        <v-menuleft/>
      </div>
      <!--    End of Left Menu     -->

      <!--    Main Menu & text box      -->
        <div class="ten wide column" id="column_2">
          
          <div class="ui tiny four steps">
            
            <a href="/dreamJob" class="active step">
              <i class="paper plane icon"></i>
                <div class="content">
                  <div class="title">Dream job</div>
                  <div class="description">Choose your dream job</div>
                </div>
            </a>
            <a href="/dailyBuild" class="active step">
              <i class="edit outline icon"></i>
                <div class="content">
                  <div class="title">Daily build</div>
                  <div class="description">Choose your daily build options</div>
                </div>
            </a>
            <a href="/bugfixMarket" class="active step">
              <i class="bug icon"></i>
                <div class="content">
                  <div class="title">Bug fix market</div>
                  <div class="description">Choose bug fixing market options</div>
                </div>
            </a>
            <a href="/startupsDeveloper" class="active step">
              <i class="building icon"></i>
                <div class="content">
                  <div class="title">Startups</div>
                  <div class="description">Choose your startups options</div>
                </div>
            </a>
          </div>
            <!--- form -->
            <div class="ui form">
                <div class="ui grid">  
                    <div class="eight wide column">
                        <h1 class="header">error
                          <button class="ui button primary">follow</button>
                        </h1>  
                    </div>
                    <div class="eight wide column">
                        <p>
                            <i class="dollar sign icon">
                            </i>20 <!--<button class="ui button primary">fix</button>-->
                            <!-- <button @click="createBugDetails()" class="ui button primary ">fix</button>                             -->
                        </p>
                    </div>
                </div>
                  <div class="ui six wide grid">
                <div class="eleven wide column">
                    <div class="ui form">
                      <div class="ui field" >
                        <label>error</label>
                        <textarea v-model="error" rows="10" id="textArea"></textarea>
                      </div>
                       <div class="ui field" >
                        <label>code</label>
                        <textarea  v-model="code" rows="10" id="textArea"></textarea>
                      </div>
                      <div class="ui field">
                          <label>Language</label>
                          <input v-model="language" type="text">
                      </div>
                      <div class="ui field">
                        <label>Price</label>
                        <input v-model="price" type="text">
                      </div>
                       <button @click="createBugDetails()" class="ui button primary right floated">fix</button> 
                     </div>                   
                    <!-- get list from aws-->
                    <div  v-for="(bug, index) in bugDetails" :key="index">
                      <a>
                        <h3 class="header">Error :</h3><p>{{ bug.error  }}</p>
                        <h3 class="header">Code :</h3><p>{{ bug.code  }}</p>
                        <h3 class="header">Language :</h3><p>{{ bug.language}}</p>
                        <h3 class="header">Price :</h3><p>{{ bug.price}}<i class="dollar sign icon"></i></p>
                        <div class=" ui dividing header"></div>
                      </a>
                    </div>
                  </div>
                  <!-- right side menu-->
                <div class="column">
                    <div class="ui vertical menu">
                        <div class="item">
                            <div class="ui small dividing header">
                                <div class="header">Invitations sent</div>
                                    <div class="menu">
                                    <p  class="item">Bill</p>
                                    <p  class="item dividing">Kenny</p>
                                </div>
                            </div>
                            <div class="ui small dividing header">
                                <div class="header">Invitations Recieved</div>
                                    <div class="menu">
                                    <p  class="item">Dave</p>
                                    <p  class="item dividing">Frank</p>
                                </div>
                            </div>
                            <div class="ui small header">
                                <div class="header">Invitations accept</div>
                                    <div class="menu">
                                    <p  class="item ">Sophie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
</template>



<script>
import uuidV4 from "uuid/v4"
import { mapState } from "vuex"
// import CreateBugs from "../../mutations/CreateBugs";
// import ListBugs from "../../queries/ListBugs";
import CreateBugDetails from "../../mutations/CreateBugDetails"
import ListBugDetails from "../../queries/ListBugDetails"
export default {
  name: "Bugfix_Market",
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  /* create bug strat from here */
  methods: {
    createBugDetails() {
      const error = this.error;
      const code = this.code;
      const language = this.language;
      const price = this.price;
      const username = this.user.username;
      if (error === "" || code === "" || language === "" || price === "") {
        alert("please enter all fields");
        return;
      }
      this.error = "";
      this.code = "";
      this.language = "";
      this.price = "";
      const id = uuidV4();
      const bugfix = {
        username: username,
        error: error,
        code: code,
        language: language,
        price: price,
        id
      };
      this.$apollo
        .mutate({
          mutation: CreateBugDetails,
          variables: bugfix,
          /* update method  */
          update: (store, { data: { createBugDetails } }) => {
            const data = store.readQuery({ query: ListBugDetails });
            data.listBugs.items.push(createBugDetails);
            store.writeQuery({ query: ListBugDetails, data });
          },
          /* Optimestic Response */
          optimisticResponse: {
            __typename: "Mutation",
            createBugs: {
              __typename: "BugDetails",
              ...bugfix
            }
          }
        })
        .then(data => console.log(data))
        .catch(error => console.error("error!!!: ", error));
    }
  },
  data() {
    return {
      error: "",
      code: "",
      language: "",
      price: "",
      username: "",
      bugDetails: []
    };
  },

  /* To get list bugs code start from here */
  apollo: {
    bugDetails: {
      query: () => ListBugDetails,
      update: data => data.listBugDetails.items
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#column_1 {
  padding-top: 20px;
}

#column_2 {
  padding-top: 25px;
}
#textArea {
  width: 100%;
}

</style>