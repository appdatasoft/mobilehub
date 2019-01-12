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
                <form class="ui form"  @submit= "checkForm" >
                    <p class="ui header">Provide details about your dream job</p>
                    <div class="field required">
                      <label>Dream Job Title</label>
                      <input type="text" v-model= "title" minlength="3" maxlength="80"  placeholder="Dream Job Title" required>
                       <div v-if="errors.length && !this.title">
                          <div class="ui basic red pointing prompt label transition visible">dream job title missing</div>
                       </div>
                      <span v-if="errors1.length && this.title.length < 3 && this.title.length > 0">
                        <div class="ui basic red pointing prompt label transition visible">Title value requires 3 characters</div>
                      </span>
                       

                    </div>

                <div class="ui grid">
                    <div class="six wide column">
                        <div class="column">
                          <!-- <i class="file massive image icon"></i> -->
                          <img class="ui medium image"  src="https://semantic-ui.com/images/wireframe/image.png">
                        </div>
                    </div>
                    <div class="nine wide column">
                      <div class="column">
                        <div class="field required ">
                          <label for="describe">Describe your dream job</label>
                          <textarea v-model= "describe" minlength="15" maxlength="500"  rows="10"  required placeholder="Describe your dream job"></textarea>
                            <div v-if="errors.length && !this.describe">
                              <div class="ui basic red pointing prompt label transition visible"> please describe about your dream job </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div><br>                
              <div class="field required">
                <label for="companyValue">Enter your dream companies</label>
                <multiselect 
                  open-direction ="bottom"
                  v-model="companyValue" 
                  tag-placeholder="Add this as new tag"
                  :searchable= "true"
                  :options="company"
                  :close-on-select="false"
                  label="companyName"
                  :multiple="true" 
                  :hide-selected="false" 
                  placeholder="Select Company" 
                  track-by="companyName" 
                  :taggable="true"
                  @tag="addCompany">
                </multiselect>
              <div v-if="errors.length && this.companyValue ==0">
                <div class="ui basic red pointing prompt label transition visible"> please select dream company name </div>
              </div>
              </div>
              <div class="field required">
                <label >Location Preferences</label>
              <multiselect 
                open-direction ="bottom"
                v-model="cityValue" 
                tag-placeholder="Add this as new tag"
                :searchable= "true"
                :search-input="false"
                :options="city"
                :close-on-select="false"
                label="city_name"
                :multiple="true" 
                :hide-selected="false" 
                placeholder="Select Location" 
                track-by="city_name" 
                :taggable="true"
                @tag="addCity" 
                required> 
              </multiselect>
              <div v-if="errors.length && this.cityValue ==0">
                <div class="ui basic red pointing prompt label transition visible"> please select location name </div>
              </div>
            </div>   

              <div class="field required">
                <label for="salary">Salary Requirement in $
                </label>
                <input v-model= "salary" type="number" min="1" max="99999999" required placeholder="Enter Salary" >
                <div v-if="errors.length && !this.salary">
                    <div class="ui basic red pointing prompt label transition visible">please enter salary amount</div>
                </div>
              </div>

              <div class="field required">
                <label for="projectValue">Type of projects you would like to work on</label>
                <multiselect 
                  open-direction ="bottom"
                  v-model="projectValue" 
                  tag-placeholder="Add this as new tag"
                  :searchable= "true"
                  :search-input="false"
                  :options="project"
                  :close-on-select="false"
                  label="projectName"
                  :multiple="true" 
                  :hide-selected="false" 
                  placeholder="Select Project" 
                  track-by="projectName" 
                  :taggable="true"
                  @tag="addProject" 
                  required> 
                </multiselect>
              <div v-if="errors.length && this.projectValue ==0">
                <div class="ui basic red pointing prompt label transition visible"> please select dream project name </div>
              </div>
              </div>
              
              <div class="field required">
                <label for="duration">Timeline in months
                </label>
                <input  v-model= "duration" type="number" min="1" max="50" required placeholder="Enter Timeline">
                <div v-if="errors.length && !this.duration">
                  <div class="ui basic red pointing prompt label transition visible">please enter timeline duration</div>
                </div>
              </div>
             
              <div align="center"> <br>
                <button class="ui submit button primary"  @click="checkForm"> Save</button>&emsp;
                <button class="ui button primary">Cancel</button>  &emsp;
                <button class="ui button primary">Publish</button>
              </div>
              <div v-if="errors.length">
                <b>Please correct the following error(s):</b><br>
                <div class="ui red message ">
                <div class="description" v-for="error in errors" :key="error">
                  <ul><li  >{{ error }}</li></ul>
                </div>
                </div>
              </div>
              <p class="description">List Dream Job Titles :</p>
              <div v-for="(job, index) in dreamJob" :key="index">
                <p>{{++index}} &emsp; {{job.title}}</p>
              </div>
             </form>
              </div>
            </div>
        </div>
      </div>
     
</template>

<script>
import uuidV4 from "uuid/v4"
import Vue from 'vue'
import { mapState } from 'vuex' 
import ListCities from '../../queries/ListCities'
import ListDreamCompanies from '../../queries/ListDreamCompanies'
import ListDreamProjects from '../../queries/ListDreamProjects'

import CreateDreamJob from '../../mutations/CreateDreamJob'
import ListDreamJobs from '../../queries/ListDreamJobs'
import Multiselect from 'vue-multiselect'
//import { of } from 'zen-observable';
  export default {
    components: { Multiselect },
    name: "Dream_Job",
    computed: {
      ...mapState({
        user: state => state.auth.user,
      })
    },
      data() { 
        return {
        errors:[],
        errors1:[],
        title:"",
        describe:"",
        salary:null,
        duration:null,

        company: [],
        companyValue: [],

        city:[],
        cityValue:[],

        project:[],
        projectValue:[]
      }
    },
     methods: {
       addCompany (newTag) {
        const tag = {
          companyName: newTag,
        }
        this.company.push(tag)
        this.companyValue.push(tag)
      },
      addCity (newTag) {
        const tag = {
          city_name: newTag,
        }
        this.city.push(tag)
        this.cityValue.push(tag)
      },
      addProject (newTag) {
        const tag = {
          projectName: newTag,
        }
        this.project.push(tag)
        this.projectValue.push(tag)
      },

      
    checkForm: function (e) {
        this.errors = [];
        this.errors1=[]
      // if (this.title && this.describe && this.companyValue && this.cityValue  && this.salary && this.project && this.duration) {
      //   return true;
      // }
      
      if (!this.title) {
        this.errors.push('Dream job title required.');
      }
      else if(this.title.length < 5){
        this.errors1.push('Title field value requires minimum 5 characters')
      }

      if (!this.describe) {
        this.errors.push('Dream job description required.');
      }
          
      if (!this.salary) {
        this.errors.push('expected salary is required.');
      }
      
      if (!this.duration) {
        this.errors.push('timeline duaration is required.');
      }
      if(this.companyValue == 0){
        this.errors.push('dream company name is required');
      }
      if(this.cityValue == 0){
        this.errors.push('location preference value is required');
      }
      if(this.projectValue == 0){
        this.errors.push('dream project name is required');
      }
      e.preventDefault();
        /* create method*/  
         const title = this.title;
      const describe = this.describe;
      const salary = this.salary;
      const duration = this.duration;
      const user = this.user.username;
     
      // if ((title) === '' || (describe) ==='' || (salary) === '' || (duration) === '') {
      //   alert("Please enter all details of your Dream Job!!")
      //   return
      // }
      this.title = ''
      this.describe = ''
      this.salary = ''
      this.duration =''
      const id = uuidV4()
      
      const dreamJobs = {
        user: user,
        title: title,
        describe: describe,
        salary: salary,
        duration: duration,
        id
      };
      this.$apollo
        .mutate({
          mutation: CreateDreamJob,
          variables: dreamJobs,
          update: (store, { data: { createDreamJob } }) => {
            const data = store.readQuery({ query: ListDreamJobs });
            data.listDreamJobs.items.push(createDreamJob);
            store.writeQuery({ query: ListDreamJobs, data });
          },
          optimisticResponse: {
            __typename: "Mutation",
            createDreamJob: {
              __typename: "DreamJob",
              ...dreamJobs
            }
          }
        })
        .then(data => console.log(data))
        .catch(error => console.error("error!!!: ", error));
         
      
   }      
  },
    apollo: { 
    city: {
      query: () => ListCities,
      update: data => data.listCities.items
    },
    company: {
      query: () => ListDreamCompanies,
      update: data => data.listDreamCompanies.items
    },
    project:{
      query: () => ListDreamProjects,
      update: data => data.listDreamProjects.items
    },
    dreamJob:{
      query: () => ListDreamJobs,
      update: data => data.listDreamJobs.items
    }  
  },
}

</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"> </style>
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