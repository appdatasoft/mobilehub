//Daily_Build.vue page from components folder full code 

<template>
          <!-- using Semantic Class -->
    <div class="ui stackable six column grid">
       <v-menuleft/>
      <!--    End of Left Menu     -->
  
  
      <!--    Main Menu & text box      -->
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
            <a class="active step">
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
            <a class="active step">
              <i class="building icon"></i>
                <div class="content">
                  <div class="title">Startups</div>
                  <div class="description">Choose your startups options</div>
                </div>
            </a>
          </div>


            <!---                  form                 -->
            <div class="ui segment">
                <div class="ui form">
                    <p class="ui header">Build Daily</p>
                    <div class="ui grid">
                        <div class="six wide column">
                            <div class="column">
                                <!-- <i class="file massive image icon"></i> -->
                                <img class="ui medium image" src="https://semantic-ui.com/images/wireframe/image.png">
                            </div>
                        </div>
                        <div class="nine wide column">
                            <div class="column">
                                <textarea rows="10" placeholder="Describe what you built today"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="ui segment">
                <div class="ui form">
                    <div class="field">
                <label>Language</label>
                <input type="text" name="username" v-validate="'required'">
              </div>

              <div class="field">
                <label>Problems faced</label>
                <input type="text" name="username" v-validate="'required'">
              </div>

              <div class="field">
                <label>Solutions to problems
                </label>
                <input type="text" name="username" v-validate="'required'">
              </div>

              

              
              <button class="ui button primary">Submit</button>
                </div>
                </div>
            
  
  
          <!--    Form Filling      -->
          
        </div>
      </div>
  
    </div>
  
</template>


<script>
  import {
    mapState
  } from 'vuex'
  
  export default {
    name: 'Daily_Build',
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