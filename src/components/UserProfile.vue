<template>
<div class="ui container">
  <br>
  <div class="ui segment">
    <div class="ui stackable grid container">
      <div class="four wide column">
        <i class="ui big user outline icon"></i>
        <div class="sub header">
          <router-link :to="`${user.username}`">{{ `@${user.username}` }}</router-link>
        </div>
      </div>


      <div class="bottom aligned twelve wide column">
        <div class="ui horizontal relaxed link list">

          <div class="item">
            <div class="content">
              <router-link :to="`/bugfixMarket`">
                <div class="header">Bug Fix Marketplace</div>
                <strong> &emsp;</strong>
              </router-link>  
            </div>
          </div>

          <div class="item">
            <div class="content">
              <router-link :to="`/Job_Posts`">
                <div class="header">Job Hackathons</div>
                <strong>&emsp;</strong>
              </router-link>
            </div>
          </div>

          <div class="item">
            <div class="content">
              <router-link :to="`/Problem`">
                <div class="header">Startup Marketplace</div>
                <strong>&emsp;</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="ui stackable two column centered vertically padded grid container">
    <div class="four wide column">
      <div class="ui left floated">
        <router-link to="/timeline" class="ui mini button primary">Back Home</router-link>
      </div>
    </div>

    <div class="four wide column">
      <div class="ui segment">
        <h2 class="ui blue medium dividing header">Bug Fix Marketplace</h2>
        <div v-for="(bug, index) in bugsUser" :key="index">
          <div class="ui header dividing">
            <p>
              <strong>Error : </strong> &emsp;
              <router-link :to="`/bugfixMarket/${bug.error}`"> {{bug.error}} </router-link>
            </p>
            <!-- <p>
              <strong>Code :</strong><br>
              {{ bug.code  }}
            </p> -->
            <p><strong>created by </strong>
              <router-link :to="`/UserProfile/${user.username}`"> <i class="small">@{{ bug.username  }}</i>
              </router-link>
            </p> 
          </div>
          <!-- <br>
        <br> -->
          <div class="ui dividing"></div>
        </div>
      </div>
    </div>

    <!-- Second column -->
    <div class="four wide column">
      <div class="ui segment">
        <h2 class="ui blue medium dividing header">Job Hackathons</h2>
        <div v-for="(task, index) in jobPostsUser" :key="index">

          <div class="ui small header dividing">
            <p><strong>Title :</strong> &emsp;
              <router-link :to="`/Job_Allposts/${task.title}`" >{{ task.title }} </router-link>
            </p>
             <p><strong>created by </strong>
              <router-link :to="`/UserProfile/${user.username}`"> <i class="small">@{{ task.username  }}</i>
              </router-link>
            </p>
          </div>

          <div class="ui dividing"></div>
        </div>
      </div>
    </div>

    <!--Third column -->
    <div class="four wide column">
      <div class="ui segment">
        <h2 class="ui blue medium dividing header">Startup Marketplace</h2>
        <div v-for="(Problem, index) in problemsUser" :key="index">
          <div class="ui header dividing">
            <div class="text">
              <p>
                <strong>Title:</strong> &emsp;
                <router-link :to="`/Problem/${Problem.title}`" append>{{Problem.title}} </router-link>
                <br>
              </p>
                  <p>created by
                <router-link :to="`/UserProfile/${user.username}`"> <i class="small">@{{ Problem.username  }}</i>
                </router-link>
              </p>
            </div>
          </div>
          <!-- <br>
        <br> -->
          <div class="ui dividing"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ListUserBugs from "../queries/ListUserBugs"
import ListUserProblems from "../queries/ListUserProblems"
import ListUserJobPosts from '../queries/ListUserJobPosts'

import {
  mapState
} from "vuex"

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
        //username: this.user.username
        username: this.$route.params.username
               };
      },
      update: data => data.listBugs.items
    },
    problemsUser: {
      query: () => ListUserProblems,
      variables(username) {
        return {
         // username: this.user.username
         username: this.$route.params.username
        };
      },
      update: data => data.listProblems.items
    },
    jobPostsUser: {
      query: () => ListUserJobPosts,
      variables(username) {
        return {
         // username: this.user.username
          username: this.$route.params.username
        };
      },
      update: data => data.listJobPosts.items
    }
  }
};
</script>