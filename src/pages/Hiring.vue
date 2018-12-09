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
  <a href="/Job_Posts" class="active step">
    <i class="paste icon "></i>
    
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
  <a href="/Int_Hackathon" class=" active  step">
    <i class="hourglass start icon"></i>
               <div class="content">
           <div class="title">Interview Hackathon</div>
         <div class="description">Verify order details</div>
       </div>
     </a>
     <a class="active step">
    <i class="handshake icon"></i>
               <div class="content">
           <div class="title">Hiring</div>
         <div class="description">Verify order details</div>
       </div>
     </a>
  </div>
       <div class="ui segment">
       <div class="ui pointing menu">
  <a class="item active">Hiring</a>
  <a class="item">Job-post</a>
  <a class="item"> Candidates</a>
  <a class="item">Interview Hackathon</a>
</div>
<div class="ui form">
            
<textarea  class="field" rows="6" placeholder="A breif bio of you"></textarea>
           
            </div>
       </div>
      <div class="ui segment">
        <h2 class="ui dividing header">Create Job Openning</h2>
        <form class="ui form">
          <div class="field">
            <label>Full Name</label>
            <input type="text" name="name"  v-validate="'required'">
            <span  class="is-danger"></span>
          </div>
          <div class="field" >
            <label>Username</label>
            <input type="text" name="username"  v-validate="'required'">
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" name="email"  v-validate="'required|email'" placeholder="Email">
          </div>

          <div class="field">
            <label>Bio</label>
            <textarea  rows="5" placeholder="A breif bio of you"></textarea>
          </div>
          <div class="field">
            <label>Location</label>
            <input type="text"  placeholder="Your location">
          </div>
          <div class="field">
            <label>Website URL</label>
            <input type="url"  placeholder="Website URL">
          </div>
          <button class="ui button primary">Update profile</button>
        </form>
              </div>
          </div>
       </div>      
    </div>
  </div>
<!-- </div> -->
</template>

<script>
import { mapState } from 'vuex'

export default {
   name: 'hiring',
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    },
  data:{
  active_el:0
  },
  methods:{
  activate:function(el){
    this.active_el = el;
    }
  }
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