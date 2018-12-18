<template>  
<b-container>
  <div class="ui stackable two column centered vertically padded grid container">
    <div class="four wide column">
      <div class="ui segment">
        <form class="ui reply form">
          <div class="field">
            <div class="sides">
              <div class="active side"></div>
            </div>

            <textarea placeholder="Upload your picture"></textarea>
          </div>
          <b-nav-item to="/tasks">
            <button class="fluid ui blue button">Tasks</button>
          </b-nav-item>
        </form>
        <div class="ui pointing menu active">
          <a class="item">
            <i class="home icon"></i>
          </a>
          <a class="item">
            <i class="user setting icon"></i>
          </a>
          <router-link :to="`UserProfile/${user.username}`">
            <a class="item">
              <i class="user circle icon"></i>
            </a>
          </router-link>

          <a class="item">
            <i class="sign out alternate icon"></i>
          </a>
        </div>
      </div>
    </div>
    <!--First column -->
    <div class="four wide column">
      <div class="ui segment">
        <h2 class="ui blue medium dividing header">Bug Fix Marketplace</h2>
        <div v-for="(bug, index) in bugs" :key="index">
          <div class="ui header dividing">
            <p>
              <strong>Title :</strong> &emsp;
              <router-link :to="`/bugfixMarket/${bug.error}`">{{bug.error}}</router-link>
            </p>
            <p>
              <strong>created by</strong>
              <router-link :to="`/UserProfile/${bug.username}`">
                <i class="small">@{{ bug.username }}</i>
              </router-link>
            </p>
          </div>
          <div class="ui dividing"></div>
        </div>
      </div>
    </div>

    <!-- Second column -->
    <div class="four wide column">
      <div class="ui segment">
        <h2 class="ui blue medium dividing header">Job Hackathons</h2>
        <div v-for="(task, index) in JobPosts" :key="index">
          <div class="ui small header dividing">
            <p>
              <strong>Title :</strong> &emsp;
              <router-link :to="`/Job_Allposts/${task.title}`" append>{{ task.title }}</router-link>
            </p>
            <p> 
              <strong>created by</strong>
              <router-link :to="`/UserProfile/${task.username}`">
                <i class="small">@{{ task.username }}</i>
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
        <div v-for="(Problem, index) in Problems" :key="index">
          <div class="ui header dividing">
            <div class="text">
              <p>
                <strong>Title:</strong> &emsp;
                <router-link :to="`/Problem/${Problem.title}`" append>{{Problem.title}}</router-link>
                <br>
              </p>
              <p>created by
                <router-link :to="`/UserProfile/${Problem.username}`">
                  <i class="small">@{{ Problem.username }}</i>
                </router-link>
              </p>
            </div>
          </div>
          <div class="ui dividing"></div>
        </div>
      </div>
    </div>
  </div>
  </b-container>
</template>                            

<script>
  
import ListProblems from "../queries/ListProblems"
import ListBugs from "../queries/ListBugs"
import ListJobPosts from '../queries/ListJobPosts'
import { mapState } from "vuex"

export default {
  name: "feed",

  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },

  apollo: {
      bugs: {
      query: () => ListBugs,
      update: data => data.listBugs.items
    },

      JobPosts: {
      query: () => ListJobPosts,
      update: data => data.listJobPosts.items
    }, 

      Problems: {
      query: () => ListProblems,
      update: data => data.listProblems.items
    },
    },
  }
</script>




<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}

</style>