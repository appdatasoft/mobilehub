<template>
<div class="ui six column grid" >
  <div class="column" id="side_bar">
    <div class="ui compact ">
      <div class="ui vertical menu">
  <div class="item">
    <div class="ui input"><input type="text" placeholder="Search..."></div>
  </div>
  <div class="item">
    Home
    <div class="menu">
      <a class="active item">Search</a>
      <a class="item">Add</a>
      <a class="item">Remove</a>
    </div>
  </div>
  <a class="item">
    <i class="grid layout icon"></i> Browse
  </a>
  <a class="item">
    Messages
  </a>
  <a class="item">
    Details
  </a>
  <a class="item">
    jobs
  </a>
  <div class="item">
    pages
    <div class="menu">
      <a class="active item">Search</a>
      <a class="item">Add</a>
      <a class="item">Remove</a>
    </div>
  </div>
  <a class="item">
    Settings
  </a>
  <div class="ui dropdown item">
    More
    <i class="dropdown icon"></i>
    <div class="menu">
      <a class="item"><i class="edit icon"></i> Edit Profile</a>
      <a class="item"><i class="globe icon"></i> Choose Language</a>
      <a class="item"><i class="settings icon"></i> Account Settings</a>
        </div>
      </div>
   </div>
    <!-- verical-column -->
    <div class="ui vertical menu">
  <div class="item">
    <div class="header">Products</div>
    <div class="menu">
      <a class="item">Enterprise</a>
      <a class="item">Consumer</a>
    </div>
  </div>
  <div class="item">
    <div class="header">CMS Solutions</div>
    <div class="menu">
      <a class="item">Rails</a>
    </div>
  </div>
    </div>



 </div>
</div>
 
 <!-- column -2 -->
 
<div class="column" id="column_2">
<!-- <div class="ui compact segment" id="column_2_segment"> -->
 
  <div class="ui stackable grid container ">
    <div class="fourteen wide column">
       <div class="ui pointing menu">
  <a class="item active">Hiring</a>
  <a class="item">Job-post</a>
  <a class="item"> Candidates</a>
  <a class="item">Interview Hackathon</a>
</div>

<div class="ui form">
            <textarea  class="field" rows="6" placeholder="A breif bio of you"></textarea>
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