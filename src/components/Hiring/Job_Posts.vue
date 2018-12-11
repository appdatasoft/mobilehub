<template>
<div class="ui six column grid" >
  <div class="column" id="side_bar">   
   <v-menuleft/>
</div>
 
 <!-- column -2 -->
 
<div class="column" id="column_2">
<!-- <div class="ui compact segment" id="column_2_segment"> --> 
  <div class="ui stackable grid container ">
    <div class="fourteen wide column">
<div class="ui four steps">
  <a  class="active step">
    <i class="paste icon"></i>
    <div class="content">
      <div class="title">Job Posts</div>
      <div class="description">Job related posts</div>
    </div>
  </a>
  <a href="/Candidates" class="active  step">
    <i class="user  icon"></i>
    <div class="content">
      <div class="title">Candidates</div>
      <div class="description">Enter billing information</div>
    </div>
  </a>
  <a href="Int_Hackathon" class=" active  step">
    <i class="hourglass start icon"></i>
               <div class="content">
           <div class="title">Interview Hackathon</div>
         <div class="description">Verify order details</div>
       </div>
     </a>
     <a class="active step">
    <i class="handshake icon "></i>
               <div class="content">
           <div class="title">Hiring</div>
         <div class="description">Verify order details</div>
       </div>
     </a>
  </div>
      <div class="ui segment">
        <h2 class="ui dividing header">Job Posting</h2>
        <form class="ui form">
          <div class="field">
            <label>Title</label>
            <input v-model="title" type="text">
            <span  class="is-danger"></span>
          </div>
           <div class="field">
            <label>Job Description</label>
            <textarea v-model="Job_Description"  rows="5" placeholder="Describe Your Job"></textarea>
          </div>
          <div class="field" >
            <label>Technologies used</label>
             <input v-model="Technologies_used" type="text"  placeholder="Technologies You Used">
          </div>        
          <div class="field">
            <label>Tools Used</label>
            <input v-model="Tools_Used" type="text" placeholder="Tools You Used">
          </div>
          <div class="field">
            <label>Team Description</label> 
            <input v-model="Team_Description" type="text" placeholder="About YourTeam ">
          </div>
          <div class="field">
            <label>Salary</label>
            <input v-model="Salary" type="text" placeholder="Expected Salary">
          </div>
          <button @click="createJobPost()" class="ui submit button">Save</button>
        </form>
        <ul>
      <li v-for="(JobPost, index) in JobPosts" :key="index">
        <p class="text">{{ JobPost.title }}  
        </p>
        <p class="text">{{ JobPost.Salary }}  
        </p>
        <p class="text">{{ JobPost.Tools_Used }}  
        </p>
        <p class="text">{{ JobPost.Team_Description }}  
        </p>
         <p class="text">{{ JobPost.Job_Description }}  
        </p>
        <p class="text">{{ JobPost. Technologies_used}}  
        </p>
         </li>
    </ul>
              </div>
          </div>
       </div>      
    </div>
  </div>
<!-- </div> -->
</template>
<script>
import ListJobPosts from '../../queries/ListJobPosts'
import CreateJobPost from '../../mutations/CreateJobPost'
import uuidV4 from 'uuid/v4'
import { mapState } from 'vuex'
export default {
   name: 'jobPosts',
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    },
    methods: {
      createJobPost() {
      const title = this.title
      const Job_Description = this.Job_Description
      const Technologies_used = this.Technologies_used
      const Tools_Used = this.Tools_Used
      const Team_Description = this.Team_Description
      const Salary = this.Salary
     
      if ((title) === '' || (Job_Description === '') || (Technologies_used === '') || (Tools_Used === '') || (Team_Description === '') ||(Salary === '') ) {
        alert('please enter all fields')
        return
      }
      this.title = ''
      this.Job_Description = ''
      this.Technologies_used = ''
      this.Tools_Used = ''
      this.Team_Description = ''
      this.Salary = ''
      const id = uuidV4()
      const JobPost = {
        title:title,
        Job_Description: Job_Description,
        id,
        Technologies_used :Technologies_used,
        Tools_Used:Tools_Used,
        Team_Description:Team_Description,
        Salary:Salary
      }
      this.$apollo.mutate({
        mutation: CreateJobPost,
        variables: JobPost,
        update: (store, { data: { createJobPost } }) => {
          const data = db.readQuery({ query: ListJobPosts })
          data.listJobPosts.items.push(createJobPost)
          store.writeQuery({ query: ListJobPosts, data })
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createJobPost: {
            __typename: 'JobPost',
            ...JobPost
          }
        },
      })
      .then(data => console.log(data))
      .catch(error => console.error("error!!!:", error))
    },
  },
  data () {
    return {
          title:'',
          Job_Description:'',
          Technologies_used:'',
          Tools_Used:'',
          Team_Description:'',
          Salary :'',
          JobPosts: []
    }
  },
     apollo: {
    JobPosts: {
      query: () => ListJobPosts,
       update: data => data.listJobPosts.items
    }
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.Hiring{
  padding-left:30% ;
  margin-top:50px;

}
#column_2{
 width: 80%;
 padding-top:20px ;
}
#column_2_segment{
  width: 0%;
}
#side_bar{
  padding-top:20px ;
  padding-left:20px; 
}
</style>