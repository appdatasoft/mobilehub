<template>
      <!--    Main Menu & text box      -->
      <div class="column" id="column_2">
           <!---form-->
            <div class="ui segment"  >
                <form class="ui form"  @submit= "checkForm" >
                  <p class="ui header">Provide details about your dream job</p>
                  <div class="field required">
                    <label>Dream Job Title</label>
                    <input type="text" v-model= "title" minlength="3" maxlength="80"  placeholder="Dream Job Title" required>
                      <div v-if=!this.title>
                        <!-- <div class="ui basic red pointing prompt label transition visible">dream job title missing</div> -->
                      </div>
                    <!-- <span v-if="errors1.length && this.title.length < 3 && this.title.length > 0">
                      <div class="ui basic red pointing prompt label transition visible">Title value requires 3 characters</div>
                    </span> -->
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
                          <label for="description">Describe your dream job</label>
                          <textarea v-model= "description" minlength="15" maxlength="500"  rows="10"  required placeholder="Describe your dream job"></textarea>
                            <div v-if= !this.description>
                              <!-- <div class="ui basic red pointing prompt label transition visible"> please describe about your dream job </div> -->
                            </div>
                        </div>
                      </div>
                    </div>
                </div><br>                
              <div class="field required">
                <label for="companies">Enter your dream companies</label>
                <multiselect 
                  open-direction ="bottom"
                  v-model="companies" 
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
              <div v-if= "this.companies ==0">
                <!-- <div class="ui basic red pointing prompt label transition visible"> please select dream company name </div> -->
              </div>
              </div>
              <div class="field required">
                <label >Location Preferences</label>
              <multiselect 
                open-direction ="bottom"
                v-model="cities" 
                tag-placeholder="Add this as new tag"
                :searchable= "true"
                :search-input="false"
                :options="city"
                :close-on-select="false"
                label="cityName"
                :multiple="true" 
                :hide-selected="false" 
                placeholder="Select Location" 
                track-by="cityName" 
                :taggable="true"
                @tag="addCity" 
                required> 
              </multiselect>
              <div v-if= "this.cities == 0">
                <!-- <div class="ui basic red pointing prompt label transition visible"> please select location name </div> -->
              </div>
            </div>   

              <div class="field required">
                <label for="salary">Salary Requirement in $
                </label>
                <input v-model= "salary" type="number" min="1" max="99999999" required placeholder="Enter Salary" >
                <div v-if= !this.salary>
                    <!-- <div class="ui basic red pointing prompt label transition visible">please enter salary amount</div> -->
                </div>
              </div>

              <div class="field required">
                <label for="projects">Type of projects you would like to work on</label>
                <multiselect 
                  open-direction ="bottom"
                  v-model="projects" 
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
              <div v-if= "this.projects ==0">
                <!-- <div class="ui basic red pointing prompt label transition visible"> please select dream project name </div> -->
              </div>
              </div>
              
              <div class="field required">
                <label for="timeline">Timeline in months
                </label>
                <input  v-model= "timeline" type="number" min="1" max="50" required placeholder="Enter Timeline">
                <div v-if= !this.timeline>
                  <!-- <div class="ui basic red pointing prompt label transition visible">please enter timeline duration</div> -->
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
              <!-- <p class="header">List Dream Job Titles :</p>
               <div v-for="(job, index) in dreamJob" :key="index">
                <p><b>dream Job Id:</b>{{job.dreamJobId}}</p>
                <p><b>title :</b> {{job.title}}</p>
                <p><b>description :</b>{{job.description}}</p>
                <p><b>company name :</b>{{job.companies}}</p>
                <p><b>location preference :</b> {{job.cities}}</p>
                <p><b>expected salary :</b> {{job.salary}}</p>
                <p><b>project name :</b> {{job.projects}}</p>
                <p><b>timeline duration :</b> {{job.timeline}}</p>
                <p><b>created Date :</b> {{job.createdDate}}</p>
                <p><b>updated date :</b> {{job.updatedDate}}</p>
                <p><b>username :</b> {{job.username}}</p>
                <p class="ui header dividing"></p>
              </div> -->
             </form>
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
        id: "",
        title: "",
        description: "",

        company: [],
        companies: [],

        city:[],
        cities:[],

        salary: null,

        project:[],
        projects: [],

        timeline: null,
        createdDate: "",
        updatedDate:"",
        
      }
    },
     methods: {
       addCompany (newTag) {
        const tag = {
          companyName: newTag,
        }
        this.company.push(tag)
        this.companies.push(tag)
      },
      addCity (newTag) {
        const tag = {
          cityName: newTag,
        }
        this.city.push(tag)
        this.cities.push(tag)
      },
      addProject (newTag) {
        const tag = {
          projectName: newTag,
        }
        this.project.push(tag)
        this.projects.push(tag)
      },

      
      checkForm: function (e) {

      if ((title) === '' || (description) ==='' || (companies)===''|| (cities)==='' ||(projects)===''|| (salary) === '' || (timeline) === '') {
        alert("Please enter all details of your Dream Job!!")
        return
      }
      
        this.errors = []
        this.errors1=[]
      if (!this.title) {
        this.errors.push ('Dream job title required.')
      }
     
      if (!this.description) {
        this.errors.push('Dream job description required.')
      }
       if(this.companies == 0){
        this.errors.push('Dream company name is required')
      }  
      if(this.cities == 0){
        this.errors.push('Location preference value is required')
      } 
      if (!this.salary) {
        this.errors.push('Expected salary is required.')
      }
      if(this.projects == 0){
        this.errors.push('Dream project name is required')
      }
      if (!this.timeline) {
        this.errors.push('Timeline duaration is required.')
      }
        /* create method*/ 
      const id=uuidV4()
      const companyId =uuidV4()
      const cityId=uuidV4()
      const projectId =uuidV4()
      const title = this.title      
      const companyName =this.companies
      const cityName =this.cities
      const projectName =this.projects
      const description = this.description
      const companies = [{companyId:companyId,companyName:this.companies}]
      const cities = [{cityId:cityId,cityName:this.cities,state:"Delhi",country:"India"}]
      const salary = this.salary
      //const projects = [{projectId:projectId,projectName:this.projects}]
      const projects = [{projectId:projectId,projectName:this.projects}]
      const timeline = this.timeline
      const createdDate= new Date()
      const updatedDate= new Date()
      const username = this.user.username
      
      this.title = ''
      this.description = ''
      this.companies =''
      this.cities =''
      this.salary = ''
      this.projects=''
      this.timeline =''
      const dreamJobId = uuidV4()
      
      const dreamJobs = {
        id,
        dreamJobId,
        title:title,
        description:description,
        companies:companies,
        cities:cities,
        salary:salary,
        projects:projects,
        timeline:timeline,
        createdDate:createdDate,
        updatedDate:updatedDate,
        username:username
      }
      this.$apollo.mutate({
        mutation: CreateDreamJob,
        variables: dreamJobs,
        update: (store, { data: { createDreamJob } }) => {
          const data = store.readQuery({ query: ListDreamJobs });
          data.listDreamJobs.items.push(createDreamJob);
          store.writeQuery({ query: ListDreamJobs, data });
        },
          // optimisticResponse: {
          //   __typename: "Mutation",
          //   createDreamJob: {
          //     __typename: "DreamJob",
          //     ...dreamJobs
          //   }
          // }
      })
      .then(data => console.log(data))
      .catch(error => console.error("error!!!: ", error));
      e.preventDefault();
     }      
  },
    apollo: { 
    city: {
      query: () => ListCities,
      update: data => data.listCities.items
    },
    company: {
      query: () => ListDreamCompanies,
      update: data => data.listCompanies.items
    },
    project:{
      query: () => ListDreamProjects,
      update: data => data.listProjects.items
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
    padding-right: 10%;
    padding-left: 10%;
  }
  
  #column_2 {
    padding-top: 20px;
    padding-left: 10%;
    width: 85%;
  }
  
</style>