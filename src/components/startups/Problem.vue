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

        <button @click="submit()" class="ui primary button">Submit</button>
      </div>
    </div>

    <div class="ui six wide column">
      <div class="ui segment">
        <h1 class="ui dividing header">Existing All Problems List:</h1>
          <div class="Problem" v-for="(Problem, index) in Problems" :key="index">
            <div class="ui segment" to="/ListProblems">
            <router-link :to="`/Problem/${Problem.title}`" append>{{Problem.title}} </router-link>
            <br> by  
            <a href=""> <small>{{ `@${Problem.username}` }}</small> </a>
            </div>
          </div>
      </div>

      <!-- Filter Only by current user/ title -->
      
     <!-- <div class="ui segment">
        <h1 class="ui dividing header">Existing Few Problems List:</h1>
          <div class="Problem" v-for="(Problem, index) in ProblemTitles" :key="index">
            <div class="ui segment">
            <router-link :to="`/${Problem.title}`">{{Problem.title}} <br> by <small>{{ `@${Problem.username}` }}</small></router-link>
            </div>
          </div>
      </div>  -->
     
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
  name: "Problem",
  methods: {
    submit() {
      const title = this.title
      const description = this.description
      const priority = this.priority
      const date = this.date
      const comments = this.comments
      const status = this.status
      const username = this.user.username

      if ((title) === '') {
        alert("Please enter details of your Problem!!")
        return
      }
      this.title = ''
      this.description = ''
      this.priority = ''
      this.date = ''
      this.comments = ''
      this.status = ''  
      this.username = ''
      const id = uuidV4()
       
      const Problem = {
        title: title,
        description: description,
        priority: priority,
        date: date,
        comments: comments,
        status: status,
        username: username,
        id,
      }
      this.$apollo.mutate({
          mutation: CreateProblem,
          variables: Problem,
          update: (store, { data: { createProblem } }) => {
            const data = store.readQuery({ query: ListProblems })
            // const index = data.listTasks.items.findIndex(item => item.id)
            data.listProblems.items.push(createProblem)
            store.writeQuery({ query: ListProblems, data })
          },
          optimisticResponse: {
            __typename: 'Mutation',
            createProblem: {
              __typename: 'Problem',
              ...Problem
            } 
          },
        })
        .then(data => console.log(data))
        .catch(error => console.error("error!!!: ", error))
    },
  },

  data() { 
    return {
      title: '',
      description: '',
      priority: '',
      comments: '',
      status: '',
      date: '',
      username: '',
      Problems: []
    }
  },
  apollo: {

    Problems: {
      query: () => ListProblems,
      update: data => data.listProblems.items
    },

     ProblemTitles: {
      query: () => ListProblemTitle,
      variables() {
        return {
          title: TrailProblem
          //title: this.title
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