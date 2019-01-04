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
                    <br/>             
              <div class="field">
                <label>Enter your dream companies</label>
                  <sui-dropdown
                    multiple
                    fluid
                    direction="downward"
                    :options="company"
                    placeholder="Preferred Company"
                    search
                    selection
                    allow-additions
                    v-model="current"  
                    />
              </div>
              
              <!-- multiple tag selection -->
  <div class="field">           
  <label >Location Preferences</label>                                                  
  <multiselect 
        :searchable="false"
        :hide-selected="true" 
        :internal-search="true"
        open-direction="bottom" 
        v-model="value" 
        label="city_name" 
        :close-on-select="false"
        :options="city"  
        :multiple="true"  
        :select="true" 
        track-by="city_name" 
        :taggable="true"  
        placeholder="Select Location"> 
</multiselect>
      </div>  
             <div class="field">
                <label>Salary Requirement in $
                </label>
                <input type="text" placeholder="Enter Salary" name="salary" >
              </div>
             <div class="field">
                <label>Type of projects you would like to work on</label>
                <sui-dropdown
                  multiple 
                  fluid
                  direction="downward"
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
                <input type="text" placeholder="Enter Timeline" name="duration" >
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
import Multiselect from 'vue-multiselect'
  export default {
    components: { Multiselect },
    name: "Dream_Job",
    computed: {
      ...mapState({
        user: state => state.auth.user,
      })
    }, 

   city1:{
      abc(){
       return this.city.city_name
      }
    },          
    data() { 
        return {
        current: null,
        company: [
        { key: 'company1', text: 'company 1', value: 'company1' },
        { key: 'company2', text: 'Company 2', value: 'company2' },
        { key: 'company3', text: 'Company 3', value: 'company3' },
        { key: 'company4', text: 'Company 4', value: 'company4' },
        ],
           value:null,
           city:[],
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
  * {
    box-sizing: border-box;
  }
  
  #column_1 {
    padding-top: 20px;
  }
  
  #column_2 {
    padding-top: 50px;
    padding-left: 2%;
    width: 65%;
  }

</style>