<template>
<!-- changes changes changes -->

<div class="ui six column grid" >
  <div class="column" id="side_bar">   
   <v-menuleft/> 
</div>
<!-- steps -->
 
  <div class="ui twelve wide column" >   


 <!-- form begin -->
  <div class="ui two wide grid" id="column_1">
 <div class="ui nine wide column">
   <!-- ....first row..... -->
      <div class="ui teal four steps">
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


<!-- first row ends here -->


      <div class="ui segment">
        <span class="ui header">Title
          <button  class="ui button primary right floated">follow</button>                                            
        </span>
        <form class="ui form">
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
                      <div class="ui field">
                        <button @click="createBugDetails()" class="ui primary button">fix</button>
                      </div>
                      
        </form>
        <!-- <div> -->
          <!-- <button @click="createBugDetails()" class="ui button primary right floated">fix</button>  -->
          <!-- </div> -->
        <!-- <button @click="createBugDetails()" class="ui primary button">Submit</button> -->
      </div>
    </div>

    <div class="ui six wide column">
      <div class="ui segment">
        <h1 class="ui header">Existing All Bug Titles:</h1>
          <div  v-for="(bug, index) in bugDetails" :key="index">
            <!-- <div class="ui segment"> -->
                <a>
                  <router-link :to="`/bugfixMarket/${bug.error}`" append>{{bug.error}} </router-link>
                  <br> by  
                  <router-link :to="`/UserProfile/${bug.username}`"> <i class="small">@{{ bug.username  }}</i></router-link>
                  <div class=" ui dividing header"></div>
                </a>
            <!-- </div> -->
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
}
</script>

<style scoped>
/* * {
  box-sizing: border-box;
}

#column_1 {
  padding-top: 20px;
}

#column_2 {
  padding-top: 25px;
  padding-left: 14%
}
#textArea {
  width: 100%;
} */

</style>