<template>
 <b-container>
    <h1>welcome {{user.username}}</h1>
   
     <div class="four wide column" id="column_3">
        <div class="ui segment">
          <h2 class="ui medium dividing header">titles of jobposts</h2>
          <div class="task" v-for="(task, index) in  JobtitlePosts" :key="index">
               <div class="ui small header dividing"> 
            <p class="text">{{ task.title }}</p>
            <p class="text">{{ task.Job_Description }}</p>
            <p class="text">{{ task.Technologies_used }}</p>
            <p class="text">{{ task.Team_Description }}</p>
            <p class="text">{{ task.Salary }}</p>
            <p class="text">{{ task.username }}</p>
            <!-- <p class="text">{{ user.username }}</p> -->
             </div> 
          </div>
        </div>
      </div>
       </b-container>
</template>
<script>
import ListTitleJobPosts from '../../queries/ListTitleJobs'
import { mapState } from 'vuex'
// import titleitem from './Job_Allposts.vue'
export default {
     computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    },
     apollo: {
    JobtitlePosts:
    {
      query:() => ListTitleJobPosts,
      variables:()=> {
          
        return {
          title: "Designer"
        }
        },
      update: data => data.listJobPosts.items
    }
  },
}
</script>