<template>
<div class="container">
  <div class="ui grid">
  <div class="eight wide column">
    <div v-for="(bug, index) in bugDetails" :key="index">
        <div class="ui header dividing">
          <p >
            <strong>Error :</strong><br>
              {{ bug.error  }}
          </p>
          
          
          
          <p>
            <strong>Code :</strong><br>
              {{ bug.code  }}
          </p>
         
          <p>
            <strong>Language :</strong><br>
              {{ bug.language  }}
          </p>
         
          <p>
            <strong>Price :</strong><br>
              {{ bug.price  }}
          </p>
         
          <p>
            <strong>Created by user </strong><br>
              {{ bug.username  }}
          </p>
          <div v-b-toggle.collapse1 v-if="canUpdateBugDetails(bug)"><span><i class="edit icon" ></i><a class=" blue text">edit</a></span></div> 
                     
          <div  v-if="canDeleteBugDetails(bug)" @click="deleteBugDetails(bug)" class="text blue"><i class="trash icon"></i>delete</div><br>                                            
          <!-- ends here -->                       
        </div>
        <br>              
        <br>
        <!-- <div class="ui dividing"></div> -->
        </div>
  </div>
    <div class="eight wide column">
      <!-- <div class="ui segment"> -->
      <div v-for="(bug, index) in bugDetails" :key="index">
          <a v-if="canUpdateBugDetails(bug)">
            <!-- <button v-b-toggle.collapse1  >edit</button>   -->
            <b-collapse id="collapse1"  class="mt-2">
              <div class="ui segment">
                <div v-b-toggle="'collapse1'" class="m-1"><i class="close icon"></i></div>
              <form>
                <div class="ui field">
                <strong>Error :</strong><br>
                </div> 
              <textarea v-model="error" rows="4" type="text" placeholder="update error"></textarea><br> 
              <div class="ui field">
              <strong>Code :</strong><br>
              </div>
              <textarea v-model="code" rows="4" type="text" placeholder="update code"></textarea><br> 
              <div class="ui field">
              <strong>Language :</strong><br>
              </div>
              <input v-model="language"  type="text" placeholder="update language"><br>
              <div class="ui field"> 
              <strong>Price :</strong><br>
              </div>
              <input v-model="price"  type="text" placeholder="update price"><br> 
              <button v-if="canUpdateBugDetails(bug)" @click="updateBugDetails(bug)" class="ui submit primary button">update</button>                 
              
              <!-- <button v-if="canUpdateBugDetails(bug)" @click="updateBugDetails(bug)" class="ui submit primary button">update</button>                  -->
              </form>
              </div>
            </b-collapse>
          </a>

          <a v-if="canUpdateBugDetails(bug)">
            <!-- <button v-b-toggle.collapse1  >edit</button>   -->
            <b-collapse id="collapse1"  class="mt-2">
              <form>
              <!-- <input v-model="code"  type="text" placeholder="update code">  -->
              <!-- <button v-if="canUpdateBugDetails(bug)" @click="updateBugDetails(bug)" class="ui submit primary button">update</button>                  -->
              </form>
            </b-collapse>
          </a>

          <a v-if="canUpdateBugDetails(bug)">
            <!-- <button v-b-toggle.collapse1  >edit</button>   -->
            <b-collapse id="collapse1"  class="mt-2">
              <form>
              <!-- <input v-model="language"  type="text" placeholder="update language">  -->
              <!-- <button v-if="canUpdateBugDetails(bug)" @click="updateBugDetails(bug)" class="ui submit primary button">update</button>                  -->
              </form>
            </b-collapse>
          </a>

          <a v-if="canUpdateBugDetails(bug)">
            <!-- <button v-b-toggle.collapse1  >edit</button>   -->
            <b-collapse id="collapse1"  class="mt-2">
              <form>
              <!-- <input v-model="price"  type="text" placeholder="update price">  -->
              <!-- <button v-if="canUpdateBugDetails(bug)" @click="updateBugDetails(bug)" class="ui submit primary button">update</button>                  -->
              </form>
            </b-collapse>
          </a>
      </div>
      <!-- </div> -->
    </div>
</div>
</div>
</template>

 
<script>
import uuidV4 from "uuid/v4"
import { mapState } from "vuex"

import CreateBugDetails from "../../mutations/CreateBugDetails"
import UpdateBugDetails from "../../mutations/UpdateBugDetails"
import DeleteBugDetails from "../../mutations/DeleteBugDetails"
import ListBugDetails from "../../queries/ListBugDetails"
import ListBugTitleDetails from"../../queries/ListBugTitleDetails"
export default {
  name: "Bugfix_Market",
  computed: {
    ...mapState({
      user: state => state.auth.user
    }),
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
    },
    canDeleteBugDetails (bug) {
        return bug.username === this.user.username
      },
      canUpdateBugDetails (bug) {
        return bug.username === this.user.username 
        return bug.id === this.bug.id
      },
      canOpenInput(bug){
        return bug.id=this.bug.id
      },
    /* Delete bug start from here */
    deleteBugDetails(bug) {
      this.$apollo.mutate({
        mutation: DeleteBugDetails,
        variables: {
          id: bug.id
        },
        update: (store, { data: { deleteBugDetails } }) => {
          const data = store.readQuery({ query: ListBugDetails });
          data.listBugDetails.items = data.listBugDetails.items.filter(bug => bug.id !== deleteBugDetails.id)
          store.writeQuery({ query: ListBugDetails, data })
        },
        /* optimistic response for delete start here */

        // optimisticResponse: {
        //   __typename: 'Mutation',
        //   deleteBugDetails: {
        //     __typename: 'BugDetails',
        //     ...bugDetails
        //   }
        // },
      })
      .then(data => console.log(data))
      .catch(error => console.error(error))
    },
    /* delete bug ends here */

    /* update starts here*/
    
   
    updateBugDetails(bug) {
      const error = this.error
      const code = this.code
      const language = this.language
      const price = this.price
      const username = this.user.username
     
      // this.error = ""
      // this.code = "";
      // this.language = "";
      // this.price = "";
      this.error = bug.error
      this.code = bug.code
      this.language = bug.language
      this.price = bug.price
      const id = bug.id      
      // const id = uuidV4();
      const bugfix = {
        // username: username,
        error: error,
        code: code,
        language: language,
        price: price,
        id
      };
      this.$apollo
        .mutate({
          mutation: UpdateBugDetails,
          variables: bugfix,
          /* update method  */
          update: (store, { data: { updateBugDetails } }) => {
            const data = store.readQuery({ query: ListBugDetails });
            data.listBugTitleDetails.items.push(updateBugDetails);
            store.writeQuery({ query: ListBugDetails, data });
          },
          /* Optimestic Response */
          optimisticResponse: {
            __typename: "Mutation",
            updateBugs: {
              __typename: "BugDetails",
              ...bugfix
            }
          }
        })
        .then(data => console.log(data))
        .catch(error => console.error("error!!!: ", error));
    }
    /* update ends here */
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
    //   query: () => ListBugDetails,
    //   update: data => data.listBugDetails.items
    // }
    query:() => ListBugTitleDetails,     
      variables(){
        return{
           error:this.$route.params.error
        }
      },
      update: data => data.listBugDetails.items 
      }
  }
}
</script>