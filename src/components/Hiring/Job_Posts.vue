<template>
<div class="ui six column grid" >
  <div class="column" id="side_bar">   
   <v-menuleft/> 
</div>
<!-- steps -->
 
  <div class="ui twelve wide column" >   


 <!-- form begin -->
  <div class="ui two wide grid" id="column_1">
 <div class="ui nine wide column">
   <!-- ....first row..... -->
 
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


<!-- first row ends here -->


      <div class="ui segment">
        <h1 class="ui dividing header">Job Posting:</h1>
        <br>
        <form class="ui form">
          <div class="field">
          <label>Title</label>
            <input v-model="title" type="text" placeholder="Input Your Current Problem here:">
          </div>

           <div class="field">
          <label>Job Description</label>
            <input v-model="Job_Description" type="text" placeholder="Input Your Problem Description here:">
          </div>

          <div class="field">
            <label>Technologies used</label>
            <input v-model="Technologies_used" type="text" placeholder="Input Your Priority  here:">
          </div>

          <div class="field">
            <label>Tools Used</label>
            <input v-model="Tools_Used" type="text" placeholder="Input date  here:" >
          </div>

          <div class="field">
            <label>Team Description</label>
            <input v-model="Team_Description" type="text" placeholder="Input Your Comments  here:">
          </div>
          <div class="field">
            <label>Salary</label>
            <input v-model="Salary" type="text"  placeholder="Input Your Problem Status:" >
          </div>
        </form>
        <button @click="submit()" class="ui primary button">Submit</button>
      </div>
    </div>

    <div class="ui six wide column">
      <div class="ui segment">
        <h1 class="ui header">Job Posts:</h1>
          <div class="/Job_Allposts/title" v-for="(Problem, index) in JobPosts" :key="index">
            <!-- <div class="ui segment" to="/ListProblems"> -->
            <div class="ui dividing header"></div>

            <router-link :to="`/Job_Allposts/${Problem.title}`" append>{{Problem.title}} </router-link>
            <br> by  
                <router-link :to="`/UserProfile/${Problem.username}`"> <i class="small">@{{ Problem.username  }}</i>
                </router-link>            <!-- <div class="ui dividing header"></div> -->
            
            </div>
          </div>
      </div>    
  
 </div>
  </div>
</div>
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
        })
    },
    methods: {
      submit() {

      const title = this.title
      const Job_Description = this.Job_Description
      const Technologies_used = this.Technologies_used
      const Tools_Used = this.Tools_Used
      const Team_Description = this.Team_Description
      const Salary = this.Salary
      const username = this.user.username  
     
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
        username:username,
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
          const data = store.readQuery({ query: ListJobPosts })
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
          username:'',
          JobPosts: [],

    }
  },
     apollo: {
    JobPosts: {
      query: () => ListJobPosts,
      update: data => data.listJobPosts.items
    },
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#column_1 {
  padding-top: 20px;
  /* padding-left: 2%; */
}
</style>