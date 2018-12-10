  <template>
<div class="ui six column grid" >
  <div class="column" id="side_bar">   
   <v-menuleft/>
</div>


  <div class="ui grid" id="column_1">
    <div class="ui ten wide column">
      <div class="ui segment">
        <h1 class="ui dividing header">Add New Problems:</h1>
        <br>
        <form class="ui form">

          <div class="field">
          <label>Problem Title</label>
            <input v-model="title" type="text" placeholder="Input Your Current Problem here:">
          </div>

           <div class="field">
          <label>Problem Description</label>
            <input v-model="description" type="text" placeholder="Input Your Problem Description here:">
          </div>

          <div class="field">
            <label>Priority</label>
            <input v-model="priority" type="text" placeholder="Input Your Priority  here:">
          </div>

          <div class="field">
            <label>Date</label>
            <input v-model="date" type="text" placeholder="Input date  here:" >
          </div>

          <div class="field">
            <label>Comments</label>
            <input v-model="comments" type="text" placeholder="Input Your Comments  here:">
          </div>
          <div class="field">
            <label>Problem Status</label>
            <input v-model="status" type="text"  placeholder="Input Your Problem Status:" >
          </div>
        </form>

        <button @click="createProblem()" class="ui primary button">Submit</button>
      </div>
    </div>

    <div class="ui six wide column">
      <div class="ui segment">
        <h1 class="ui dividing header">Existing Problems List:</h1>
        <br>
        <ul>
          <li class="Problem" v-for="(Problem, index) in Problems" :key="index">
            <p class="Problem">
              {{ Problem.title }} created by username
              <b-nav-item to="/ProblemsList">{{ user.username }}.</b-nav-item>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
 
<script>
import ListProblem from "../../queries/ListProblem";
import CreateProblem from "../../mutations/CreateProblem";
import uuidV4 from "uuid/v4";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  name: "Problem",
  methods: {
    createProblem() {
      const title = this.title;
      const description = this.description;
      if (title === "") {
        alert("Please add your a Problem!!");
        return;
      }
      this.title = "";
      this.description = "";
      const id = uuidV4();
      const Problem = {
        title: title,
        description: description,
        // priority: Problem_Priority,
        // comments: Problem_Comments,
        // status: Problem_Status,
        // date: Problem_date,
        id
      };
      this.$apollo
        .mutate({
          mutation: CreateProblem,
          variables: Problem,
          update: (store, { data: { createProblem } }) => {
            const data = store.readQuery({ query: ListProblems });
            data.listProblems.items.push(createProblem);
            store.writeQuery({ query: ListProblems, data });
          },
          optimisticResponse: {
            __typename: "Mutation",
            createProblem: {
              __typename: "Problem",
              ...Problem
            }
          },
        })
        .then(data => console.log(data))
        .catch(error => console.error("error!!!: ", error));
    }
  },

  data() {
    return {
      title: "",
      description: "",
      // ProblemPriority: "",
      // ProblemComments: "",
      // ProblemStatus: "",
      // Problemdate: "",
      Problems: []
    };
  },
  apollo: {
    Problems: {
      query: () => ListProblems,
      update: data => data.listProblems.items
    }
    // userProblems: {
    //   query: () => ListUserProblems,
    //   variables() {
    //     return {
    //       username: this.user.username
    //     };
    //   },
    //   update: data => data.listProblems.items
    // }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#column_1 {
  padding-top: 25px;
  padding-left: 2%;
}
</style>
  




