<template>
  <b-container>
    <div class="ui container" id="mainbox">
      <div class="ui segment">
        <div>
          <div class="ui dividing header">Welcome {{ user.username }}:</div>
          <p class="ui small pointing below label">Please select your role here</p>
          <div class="ui dividing header">I am a</div>
        </div>
        <!-- A row of four column semantic cards -->
        <div class="ui four cards">
          <!-- Card 1  -->
          <a class="green card">
            <div class="content">
              <div class="header">Developer
                <div class="ui right floated fitted checkbox">
                  <input v-model="developer" type="checkbox">
                  <label></label>
                </div>
              </div>
            </div>
          </a>
          <!-- card 2 -->
          <a class="teal card">
            <div class="content">
              <div class="header">Hiring Manager
                <div class="ui right floated fitted checkbox">
                  <input v-model="hiring" type="checkbox">
                  <label></label>
                </div>
              </div>
            </div>
          </a>
          
          <a class="blue card">
            <div class="content">
              <div class="header">Startup
                <div class="ui right floated fitted checkbox">
                  <input v-model="startup" type="checkbox">
                  <label></label>
                </div>
              </div>
            </div>
          </a>
          <a class="violet card">
            <div class="content">
              <div class="header">Business Owner
                <div class="ui right floated fitted checkbox">
                  <input v-model="business" type="checkbox">
                  <label></label>
                </div>
              </div>
            </div>
          </a>
        </div>
        <br>
        <button @click="UserType()" class="ui right floated circular primary button">Save</button>
        <br>
        <br>
      </div>
    <div class="ui six wide column">
      <div class="ui segment">
        <h1 class="ui dividing header">Current User Type is:</h1>
          <div class="UserType" v-for="(UserType, index) in UserTypes" :key="index">
            {{UserType.username}} has selected following fields:
             {{UserType.usertype}}  
            </div> 
          </div>
      </div> 
    </div>
  </b-container>
</template>  

<style scoped>
#mainbox {
  padding-top: 25px;
}
</style>