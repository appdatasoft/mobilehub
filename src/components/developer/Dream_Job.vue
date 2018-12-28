//Dream_Job.vue file from components folder full code 

<template>

    <div class="ui stackable six column grid">
      <!--   Left Menu     -->
      <div class="column" id="column_1">
        <v-menuleft/>
      </div>
  
      <!--    End of Left Menu     -->
  
      <!--    Main Menu & text box      -->
      <div class="column" id="column_2">
        <div class="ui stackable grid container"></div>
        <div class="fourteen wide column">
          
          <!-- Step links  -->
          <div class="ui tiny four steps">
            <a href="/developer/dreamjob" class="active step">
              <i class="paper plane icon"></i>
                <div class="content">
                  <div class="title">Dream job</div>
                  <div class="description">Choose your dream job</div>
                </div>
            </a>
            <a href="/developer/dailyBuild" class="active step">
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


            <!---form-->
            <div class="ui segment">
                <form class="ui form">
                    <p class="ui header">Provide details about your dream job</p>
              <div class="field">
                <input type="text" placeholder="Dream Job Title"  v-validate="'required'">
              </div>

                    <div class="ui grid">
                        <div class="six wide column">
                            <div class="column">
                                <!-- <i class="file massive image icon"></i> -->
                                <img class="ui medium image" src="https://semantic-ui.com/images/wireframe/image.png">
                            </div>
                        </div>
                        <div class="nine wide column">
                            <div class="column">
                                <textarea rows="10" placeholder="Describe your dream job"></textarea>
                            </div>
                        </div>
                    </div>
               
                
                <!-- <div class="ui segment"> -->
              <div class="field">
                <label>Enter your dream companies</label>
                <input type="text" name="company" v-validate="'required'">
              </div>


              <div class="field">
                <label>Location Preferences</label>

  <sui-dropdown
    multiple
    fluid
    :options="location"
    placeholder="Preferred Location"
    search
    selection
    allow-additions
    v-model="current"
  />

                <!-- <input type="text" name="location" v-validate="'required'"> -->
              </div>

              <div class="field">
                <label>Salary Requirement in $
                </label>
                <input type="text" name="salary" v-validate="'required'">
              </div>

              <div class="field">
                <label>Type of projects you would like to work on</label>
                <input type="text" name="project" v-validate="'required'">
              </div>

              <div class="field">
                <label>Timeline in months
                </label>
                <input type="text" name="duration" v-validate="'required'">
              </div>
             </form>
               
               <div align="center"> <br>
              <button class="ui button primary">Save</button> &emsp;
              <button class="ui button primary">Cancel</button>  &emsp;
              <button class="ui button primary">Publish</button>
              </div>

                </div>
                </div>
        </div>
      </div>
</template>



<script>
 
import { mapState } from 'vuex'
// import {$,jQuery} from 'jquery';

// window.$ = $;
// window.jQuery = jQuery;
// window.$ = window.jQuery = 'jquery'

// global.jQuery = require('jquery')
// var $ = global.jQuery



  
  export default {
    name: "Dream_Job",
    computed: {
      ...mapState({
        user: state => state.auth.user,
      })
    },
  // $(this.$el.multi-select).dropdown()

  // $('#multi-select').dropdown()
// $(multi-select).dropdown()
      // methods: {

//   location(){
//   $(this.multi-select).dropdown()
//   // $(this.$el).find('.dropdown').dropdown();
// },


      data() {
    return {
      current: null,
      location: [
        { key: 'city1', text: 'City 1', value: 'city1' },
        { key: 'city1', text: 'City 2', value: 'city2' },
        { key: 'city1', text: 'City 3', value: 'city3' },
        { key: 'city1', text: 'City 4', value: 'city4' },
      ],
    }
  },
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