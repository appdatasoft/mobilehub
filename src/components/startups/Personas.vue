<template>
          <!-- using Semantic Class -->
    <div class="ui stackable six column grid">
      <!--   Left Menu     -->
      <div class="column" id="column_1">
        <div class="ui vertical menu">
          <div class="ui">
  
            <div class="item">
              <div class="ui transparent icon input">
                <input type="text" placeholder="Search Website...">
                <i class="search icon"></i>
              </div>
            </div>
  
            <div class="active teal item">
              <div class="header">Deveoper</div>
              <div class="menu">
                <a class="item">Dream Job</a>
                <a class="item">Daily Build</a>
                <a class="item"> Bug Fix Market</a>
                <a class="item">Startups </a>
              </div>
            </div>
  
            <div class="active teal item">
              <div class="header">Hiring</div>
              <div class="menu">
                <a class="item">Job Posts</a>
                <a class="item">Candidates</a>
                <a class="item"> Interview Hackathon</a>
              </div>
            </div>
  
            <div class="active teal item">
              <div class="header">Startups</div>
              <div class="menu">
                <a href="/cd" class="item">Problem</a>
                <a href="/cd" class="item">Solution</a>
                <a href="/cd" class="item">Customer Personas</a>
                <a class="item">Customer Development</a>
                <a class="item">MVP</a>
                <a class="item">Prototype</a>
                <a class="item">Validate</a>
              </div>
            </div>
  
            <div class="active teal item">
              <div class="header">SMB</div>
              <div class="menu">
                <a class="item">Business Process</a>
                <a class="item">Mapping</a>
                <a class="item">Implementation</a>
                <a class="item">Training</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!--    End of Left Menu     -->
  
  
      <!--    Main Menu & text box      -->
      <div class="column" id="column_2">
        <div class="ui stackable grid container"></div>
        <div class="ui steps">
  <div class="step">
    <i class="bug icon"></i>
    <div class="content">
      <div class="title">Problem</div>
      <div class="description">Solution</div>
    </div>
  </div>
  <div class="active step">
    <i class="paint brush icon"></i>
    <div class="content">
      <div class="title">Customer</div>
      <div class="description">Personas</div>
    </div>
  </div>
  <div class="active step">
    <i class="id badge outline icon"></i>
    <div class="content">
      <div class="title">Customer</div>
      <div class="description">Development</div>
    </div>
  </div>
  <div class="active step">
    <i class="flask icon"></i>
    <div class="content">
      <div class="title">Prototype</div>
      <div class="description">MVP</div>
    </div>
  </div>
  <div class="active step">
    <i class="binoculars icon"></i>
    <div class="content">
      <div class="title">Validate</div>
      <div class="description">Viable</div>
    </div>
  </div>
  
</div>
        <div class="twelve wide column">
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
            <h2 class="ui dividing header">Customer Development </h2>
            <form class="ui form">
              <div class="field">
                <label>Add Emails</label>
                <input type="text" name="name" v-validate="'required'">
                <span class="is-danger"></span>
              </div>
              <div class="field">
              <label>Email Message</label>
                <textarea></textarea>
              </div>
              <div class="field">
                <label>Username</label>
                <input type="text" name="username" v-validate="'required'">
                <!-- <span v-show="errors.has('username')" class="is-danger">{{ errors.first('username') }}</span> -->
              </div>
              <div class="field">
                <label>Email</label>
                <input type="email" name="email" v-validate="'required|email'" placeholder="Email">
                <!-- <span v-show="errors.has('email')" class="is-danger">{{ errors.first('email') }}</span> -->
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
  </div>
</template>



<script>
  import {
    mapState
  } from 'vuex'
  
  export default {
    name: 'cb',
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