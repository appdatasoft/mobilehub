<template>
  <b-container class="feed">
    <!-- using Semantic Class -->
    <div class="ui grid">
      <!-- First Column  -->
      <div class="four wide column" id="column_1">
        <div class="ui segment">
          <form class="ui reply form">
            <div class="field">
              <div class="ui cube shape">
                <div class="sides">
                  <div class="active side">
                    <div class="content">
                      <div class="center"><i class="user circle icon"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <textarea placeholder="Compose your tweet here"></textarea> -->
            </div>
            <button class="fluid ui blue button">Follow</button>
          </form>
          <div class="ui pointing menu active">
            <a class="item">
              <i class="home icon"></i>
            </a>
            <a class="item">
              <i class="user setting icon"></i>
            </a>
            <a class="item">
              <i class="user circle icon"></i>
            </a>
            
            <a class="item">
              <i class="sign out alternate icon"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Middle column -->
      <div class="eight wide column" id="column_2">
        <div class="ui segment">
          <h2 class="ui medium dividing header">Timeline</h2>
          <h6 class="ui medium dividing header">
            Welcome
            <a href>{{ user.username }}</a>
          </h6>

          <div class="ui list">
            <div class="event">
              <div class="item">
                <!-- Should get AWS Timestamp -->
                <div v-for="(task, index) in JobPosts" :key="index">
                
             <div class="ui small header dividing"> 
                   <strong> Title: </strong>
                   <router-link :to="`/title=${task.title}`" > 
              
                      {{ task.title }} 
                      </router-link>
                        <br/>
                 <strong> owner: </strong>    
                 {{ task.username }}
                  </div>
                  <div class="ui dividing"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Third column -->
      <div class="four wide column" id="column_3">
        <div class="ui segment">
          <h2 class="ui medium dividing header">titles of jobposts</h2>
          <div class="task" v-for="(task, index) in  JobtitlePosts" :key="index">
            <p class="text">{{ task.title }}</p>
            <!-- <p class="text">{{ user.username }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>                            
<script>
import ListJobPosts from '../../queries/ListJobPosts'
import CreateJobPost from '../../mutations/CreateJobPost'
import ListTitleJobPosts from '../../queries/ListTitleJobs'
import uuidV4 from 'uuid/v4'
import { mapState } from 'vuex'
export default {
   name: 'jobPosts',
    computed: {
        ...mapState({
            user: state => state.auth.user,
            
        }),
    }, 
   
     apollo: {
    JobPosts: {
      query: () => ListJobPosts,
      update: data => data.listJobPosts.items
    },
    JobtitlePosts:
    {
      query:() => ListTitleJobPosts,
        variables(){
        return {
          title: "Designer"
        }
        },
      update: data => data.listJobPosts.items
    }
  },
 
 
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.feed {
  padding-top: 40px;
}
</style>