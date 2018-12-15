<!-- Source path is  "src/pages/UserLists.vue "-->


<template>
<div class="ui container">
    <h2 class="header right floated"> welcome <i>{{user.username}}</i></h2>
    <div class= "ui stackable two column centered vertically padded grid container">
    <!-- <div v-for="(bug, index) in bugsTitle" :key="index"> -->
     <div class="four wide column" id="column_2">
         <div class="ui segment">
          <h2 class="ui blue medium dividing header">Bug Fix Marketplace</h2>   
    <div v-for="(bug, index) in bugsUser" :key="index">        
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
            <strong>created by</strong>
            <i class="small">{{ bug.username  }}</i>
          </p>                        
        </div>
        <!-- <br>              
        <br> -->
        <div class="ui dividing"></div>
        </div></div>
        </div>

        <!--second column -->
        <div class="four wide column" id="column_2">
            <div class="ui segment">
          		<h2 class="ui blue medium dividing header">Startup Marketplace</h2>      
       <div v-for="(Problem, index) in problemsUser" :key="index">        
       	<div class="ui header dividing">
            <div class="text">
                <p>
                <strong>Description:</strong><br>
                 {{Problem.description}} <br>
                </p>
                <p>
                <strong>Priority:</strong><br>
                 {{Problem.priority}} <br>
                </p>
                <p>
                <strong>Status:</strong><br>
                 {{Problem.status}} <br>
                </p>
                <p>
                <strong>Comments:</strong><br>
                  {{Problem.comments}} <br>
                </p>
                <p>
                <strong>Problem created date :</strong><br>
                  {{Problem.date}} <br>
                </p>
                <p>created by
                    <i class="small">{{ Problem.username  }}</i> 
                </p>
            </div>                             
        </div>
        <!-- <br>              
        <br> -->
        <div class="ui dividing"></div>
        </div></div>
        </div>

        <!-- Third column -->
        <div class="four wide column" id="column_2">
            <div class="ui segment">
          <h2 class="ui blue medium dividing header">Job Hackathons</h2>      
    <div v-for="(task, index) in jobPostsUser" :key="index">        
       
               <div class="ui small header dividing"> 
            <p><strong>Title :</strong><br>
                {{ task.title }}</p>
            <p><strong>Description :</strong><br>
                {{ task.Job_Description }}</p>
            <p><strong>Technologies used :</strong><br>
                {{ task.Technologies_used }}</p>
            <p><strong>Team_Description :</strong><br>
                {{ task.Team_Description }}</p>
            <p><strong>Salary :</strong><br>
                {{ task.Salary }}</p>
            <p><strong>created by </strong>
                <i class="small">{{ task.username }}</i></p>
            
             </div> 
         
        <div class="ui dividing"></div>
        </div></div>
        </div>
    </div>

</div>
</template>

<script>

import ListUserBugs from "../queries/ListUserBugs";
import ListUserProblems from "../queries/ListUserProblems";
import ListUserJobPosts from '../queries/ListUserJobPosts';

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  apollo: {
    
    bugsUser: {
      query: () => ListUserBugs,
      variables(username) {
        return {
          username: this.user.username
        };
      },
      update: data => data.listBugs.items
    },
    problemsUser: {
      query: () => ListUserProblems,
      variables(username) {
        return {
          username: this.user.username
        };
      },
      update: data => data.listProblems.items
    },
    jobPostsUser:{
        query:() =>ListUserJobPosts,
        variables(username) {
        return {
          username: this.user.username
        };
      },
      update: data => data.listJobPosts.items
    }
  }
};
</script>