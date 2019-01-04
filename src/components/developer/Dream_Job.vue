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
                <input type="text" placeholder="Dream Job Title"  >
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
                  <sui-dropdown
                    multiple
                    fluid
                    :options="company"
                    placeholder="Preferred Company"
                    search
                    selection
                    allow-additions
                    v-model="current"  
                    />
              </div>
              <!-- <div class="field">
              <div data-v-115c3d82="" role="listbox" tabindex="0" class="ui fluid multiple selection search dropdown">
                <div role="alert" aria-live="polite" class="default text">Skills</div>
                <i aria-hidden="true" class="dropdown icon"></i>
                <span class="sizer"></span>
                <div tabindex="-1" multiple
                   fluid
                   selection
                   allow-additions
                   class="menu transition ui fluid multiple selection search dropdown default text sizer">
                <input type="text" aria-autocomplete="list" autocomplete="off" tabindex="0" class="search">
                   
                  <div role="option" multiple
                   fluid
                   selection="true"
                   allow-additions
                   class="item" v-for="(location, index) in city" :key="index">{{location.city_name}}</div>
                  <div role="option" class="item">Arizona</div>
                  
              </div>
</div></div> -->

              <div class="field">
                <label>Location Preferences</label>
                         <select class="selectpicker" >
                            <option
                              v-for="(Cities, index) in city" :key="index"
                              value=""
                              multiple
                              fluid
                              selection
                              allow-additions
                              placeholder = "Preferred Location">{{Cities.city_name}}
                            </option>
                          </select>     
                <!-- <select class="selectpicker" multiple data-live-search="true">
                  <option
                   v-for="(location, index) in city" :key="index" 
                   value="" 
                   multiple
                   fluid
                   selection
                   allow-additions
                   placeholder = "Preferred Location">{{location.city_name}}
                  </option>
                </select> -->
                <!-- <div v-for="(location, index) in city" :key="index" >
                </div> -->
              <!-- <multiselect v-for="(location, index) in city" :key="index"
                value="" 
                multiple
                fluid
                   selection
                   allow-additions
                   placeholder = "Preferred Location"></multiselect> -->
              <!-- <sui-dropdown
                
                multiple
                fluid
                direction="downward"
                :options = "location"
                placeholder = "Preferred Location"
                search
                selection
                allow-additions
                v-model= "current1"
              /> -->
              <!--<option v-for="place in city" 
                :key="place.id" multiple
                fluid
                direction="downward"
                :options = "location"
                placeholder = "Preferred Location"
                search
                selection
                allow-additions
                >{{place.city_name}}</option>
              </sui-dropdown> -->
                <!-- </div>   -->
                   
              
            <!-- </div>  -->
      
            </div>   

              <div class="field">
                <label>Salary Requirement in $
                </label>
                <input type="text" name="salary" >
              </div>

              <div class="field">
                <label>Type of projects you would like to work on</label>
                <sui-dropdown
                  multiple
                  fluid
                  :options="project"
                  placeholder="Dream Projects"
                  search
                  selection
                  allow-additions
                  v-model="current2"
                />
              </div>

              <div class="field">
                <label>Timeline in months
                </label>
                <input type="text" name="duration" >
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
import Vue from 'vue'
import { mapState } from 'vuex' 
import ListCities from '../../queries/ListCities'
//import Multiselect from 'vue-multiselect'

  export default {
  
    name: "Dream_Job",
    computed: {
      ...mapState({
        user: state => state.auth.user,
      })
    },
    // methods:{
    //   location(Cities){
    //     return Cities.city_name=this.Cities.city_name
    //   }
    // },
        
      data() { 
        return {
        current: null,
        company: [
        { key: 'company1', text: 'company 1', value: 'company1' },
        { key: 'company2', text: 'Company 2', value: 'company2' },
        { key: 'company3', text: 'Company 3', value: 'company3' },
        { key: 'company4', text: 'Company 4', value: 'company4' },
        ],

        current1: null,
        location: [
         {key: 'index', text:'City name1', value: 'city_name1'},
         {key: 'index', text:'City name2', value: 'city_name2'},
         {key: 'index', text:'city name3', value: 'city_name3'},
         
        ],

       current2: null,
       project: [
        { key: 'project1', text: 'Project 1', value: 'project1' },
        { key: 'project2', text: 'Project 2', value: 'project2' },
        { key: 'project3', text: 'Project 3', value: 'project3' },
        { key: 'project4', text: 'Project 4', value: 'project4' },
       ],

      }
    },
   
    apollo: { 
    city: {
      query: () => ListCities,
      update: data => data.listCities.items
    },  
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