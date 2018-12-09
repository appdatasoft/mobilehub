//Developer.vue file from pages folder full code 

<template>
          <!-- using Semantic Class -->
    <div class="ui stackable six column grid">
      <v-menuleft/>
        
  
      <!--     text box      -->
      <div class="column" id="column_2">
        <div class="ui stackable grid container"></div>
        <div class="fourteen wide column">
          
          <div class="ui tiny four steps">
            <a href="/Dream_Job" class="active step">
              <i class="paper plane icon"></i>
                <div class="content">
                  <div class="title">Dream job</div>
                  <div class="description">Choose your dream job</div>
                </div>
            </a>
            <a href="/Daily_Build" class="active step">
              <i class="edit outline icon"></i>
                <div class="content">
                  <div class="title">Daily build</div>
                  <div class="description">Choose your daily build options</div>
                </div>
            </a>
            <a href="/Bugfix_Market" class="active step">
              <i class="bug icon"></i>
                <div class="content">
                  <div class="title">Bug fix market</div>
                  <div class="description">Choose bug fixing market options</div>
                </div>
            </a>
            <a href="/Startups_Developer" class="active step">
              <i class="building icon"></i>
                <div class="content">
                  <div class="title">Startups</div>
                  <div class="description">Choose your startups options</div>
                </div>
            </a>
          </div>

          <div class="ui segment">
            <div class="ui pointing menu active">
              <a href="" class="item">Home </a>
              <a class="item">Dashboard</a>
              <a class="item ">Dream Job</a>
              <a class="item"> Daily Build</a>
            </div>

            <form class="ui reply form">
              <div class="field">
                <textarea></textarea>
              </div>

              <div class="ui blue labeled submit  icon button">
                <i class="icon arrow circle right"></i> Next 
              </div>
            </form>

          </div>
  
  
  
          <!--    Form Filling      -->
          <div class="ui segment">
            <h2 class="ui dividing header">Give details of your idea </h2>
            <form class="ui form">
              <div class="field">
                <label>Full Name</label>
                <input type="text" name="name" v-validate="'required'">
                <span class="is-danger"></span>
              </div>
              <div class="field">
                <label>Username</label>
                <input type="text" name="username" v-validate="'required'">
              </div>
              <div class="field">
                <label>Email</label>
                <input type="email" name="email" v-validate="'required|email'" placeholder="Email">
              </div>
  
              <div class="field">
                <label>Bio</label>
                <textarea rows="5" placeholder="A breif bio of you"></textarea>
              </div>
  
              <div class="field">
                <label>Location</label>
                <input type="text" placeholder="Your location">
              </div>
  
              <div class="field">
                <label>Website URL</label>
                <input type="url" placeholder="Website URL">
              </div>
  
              <button class="ui button primary">Update profile</button>
            </form>
          </div>
        </div>
      </div>
  
    </div>
  
</template>



<script>
  import {
    mapState
  } from 'vuex'
  
  export default {
    name: 'developer',
    computed: {
      ...mapState({
        user: state => state.auth.user,
      })
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  
  #column_1 {
    padding-top: 20px;
  }
  
  #column_2 {
    padding-top: 50px;
    padding-left: 8%;
    width: 60%;
  }
</style>