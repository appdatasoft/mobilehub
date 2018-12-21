<template>
  <div class="ui six column grid">
    <div class="column" id="side_bar">
      <v-menuleft/>
    </div>

    <div class="ui grid" id="column_1">
      <div class="column" id="column_2">
        <div class="ui segment">
          <h6 class="ui medium dividing header">
            Welcome
            <a href>{{ user.username }}</a>
          </h6>

           <div class="ui segment">
        <h1 class="ui dividing header">Ideas:</h1>
          <div class="Problem" v-for="(Problem, index) in ProblemTitles" :key="index">
            <div class="ui segment">
            <router-link :to="`/${Problem.title}`">{{Problem.title}} by <small>{{ `@${Problem.username}` }}</small></router-link> <br>
            <p> Problem  Description: {{Problem.description}} <br>
             Problem  Priority: {{Problem.priority}} <br>
             Problem  Status: {{Problem.status}} <br>
             Problem comments:  {{Problem.comments}} <br>
             Problem  created date :  {{Problem.date}} <br> </p>
            </div>
          </div>
      </div> 

          </div>
        </div>
      </div>
    </div>
</template>

 <script>
import ListProblems from "../../queries/ListProblems"
import CreateProblem from "../../mutations/CreateProblem"
import ListProblemTitle from "../../queries/ListProblemTitle"

import uuidV4 from "uuid/v4"
import { mapState } from "vuex" 
export default {
  computed: {
    ...mapState({ 
      user: state => state.auth.user
    })
  },
  name: "problem_allposts",

    apollo: {

    Problems: {
      query: () => ListProblems,
      update: data => data.listProblems.items
    },

     ProblemTitles: {
      query: () => ListProblemTitle,
      variables() {
        return {
          title: this.$route.params.title
        }
        },
      update: data => data.listProblems.items
    }
  },
}
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