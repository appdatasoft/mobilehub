<template>
  <!-- <div class="column" id="column_1">
      <v-menuleft/>
      <v-dreamjobsteps />
  </div>-->
  <div class="ui grid" id="column_1">
    <div class="three column row">
      <div class="four wide column"></div>
      <div class="eight wide column" id="column_2">
   
        <div class="ui segment">
          <div class="ui two item pointing menu">
            <router-link :to="`/dreamjob`" class="ui active item">Create Dreamjob</router-link>
            <router-link :to="`/DreamjobTimeline`" class="ui item">Dreamjob Timeline</router-link>
          </div>
          <!---form-->
          <form class="ui form" @submit="checkForm">
            <p class="ui header">Provide details about your dream job</p>
            <div class="field required">
              <label>Dream Job Title</label>
              <input
                type="text"
                v-model="title"
                minlength="3"
                maxlength="80"
                placeholder="Dream Job Title"
                required
              >
              <div v-if="!this.title"></div>
            </div>

            <div class="nine wide column">
              <div class="column">
                <div class="field required">
                  <label for="description">Describe your dream job</label>
                  <textarea
                    v-model="description"
                    minlength="15"
                    maxlength="500"
                    rows="10"
                    required
                    placeholder="Minimum 50 words please"
                  ></textarea>
                  <div v-if="!this.description"></div>
                </div>
              </div>
            </div>

            <div class="field required">
              <label for="companies">Select your dream companies</label>
              <select
                v-model="companies"
                name="companies"
                class="search selection dropdown"
                multiple
                id="multiselectCompany"
              >
                <div v-for="(job, index) in company" :key="index">
                  <option>{{job.companyName}}</option>
                </div>
                </select>
                <!-- <p>{{companies}}</p> -->
              <div v-if="this.companies ==0"></div>
            </div>

            <div class="field required">
              <label>Location Preferences</label>
              <select
                v-model="cities"
                name="cities"
                class="ui search selection dropdown"
                multiple
                id="multiselectLocation"
              >
                 <div v-for="(job, index) in city" :key="index">
                  <option>{{job.cityName}}</option>
                </div>
              </select>
              <div v-if="this.cities == 0"></div>
            </div>

            <div class="field required">
              <label for="projects">Type of projects you would like to work on</label>
                  <select
                v-model="projects"
                name="projects"
                class="ui search selection dropdown"
                multiple
                id="multiselectProject"
              > 
                <div v-for="(job, index) in project" :key="index">
                  <option>{{job.projectName}}</option>
                </div>
                  </select>
              <div v-if="this.projects ==0"></div>
            </div>

            <div class="field required">
              <label for="skills">Enter your programming skills</label>
                  <select
                v-model="skills"
                name="skills"
                class="ui search selection dropdown"
                multiple
                id="multiselectSkills"
              > 
                <div v-for="(job, index) in company" :key="index">
                  <option>{{job.companyName}}</option>
                </div>
                  </select>
              <div v-if="this.projects ==0"></div>
            </div>

            <div class="field required">
              <label for="salary">Salary Requirement in $</label>
              <input
                v-model="salary"
                type="number"
                min="1"
                max="99999999"
                required
                placeholder="Enter Salary"
              >
              <div v-if="!this.salary"></div>
            </div>

            <div class="field required">
              <label for="timeline">Timeline in months</label>
              <input
                v-model="timeline"
                type="number"
                min="1"
                max="50"
                required
                placeholder="Enter Timeline"
              >
              <div v-if="!this.timeline"></div>
            </div>

            <div class="inline fields">
              <div class="field">
                <br>
                <div class="ui radio checkbox" data-tooltip="To share with limited people/yourself">
                  <input type="radio" name="publicstatus" checked="checked">
                  <label>Save Privately</label>
                </div>
              </div>

              <div class="field">
                <br>
                <div class="ui radio checkbox" data-tooltip="To share with entire community">
                  <input type="radio" name="publicstatus">
                  <label>
                    Save Publicly &emsp;
                    
                  </label>
                </div>
              </div>
            </div>

            <div class="field">
              <br>
              <div class="ui checkbox">
                <input type="checkbox" name="terms">
                <label>
                  I agree to Terms and Conditions &emsp;
                  
                </label>
              </div>
            </div>

            <div align="center">
              <br>
              <button class="ui compact button primary" @click="checkForm">Save</button>&emsp;
              <router-link :to="`/DreamjobTimeline`" class="ui compact primary button">Cancel</router-link>&emsp;
              <button v-b-modal.modalsm3 class="ui compact button primary">Publish</button>
            </div>
            <!-- if sent to database successfully  -->
            <b-modal
              ok-only
              centered
              hide-footer
              id="modalsm3"
              size="sm"
              title="Your dreamjob is published"
            ></b-modal>

            <div v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <br>
              <div class="ui red message">
                <div class="description" v-for="error in errors" :key="error">
                  <ul>
                    <li>{{ error }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="four wide column"></div>
  </div>
</template>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
import jQuery from 'jquery'
import $ from 'jquery'
import uuidV4 from "uuid/v4"
import Vue from 'vue'
import {
    mapState
} from 'vuex'
import ListCities from '../../queries/ListCities'
import ListDreamCompanies from '../../queries/ListDreamCompanies'
import ListDreamProjects from '../../queries/ListDreamProjects'
import CreateDreamJob from '../../mutations/CreateDreamJob'
import ListDreamJobs from '../../queries/ListDreamJobs'

export default {

     mounted: function (){
    $(this.$el).find('#multiselectCompany, #multiselectLocation, #multiselectProject, #multiselectSkills').dropdown(
        {
        allowAdditions: true,
        forceSelection: false,
        hideAdditions: false,
          }
        )


    $(this.$el).find('#search-select').dropdown()
    },

    components: {
        // Multiselect
    },
    name: "Dream_Job",
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    },
    data() {
        return {
            errors: [],
            errors1: [],
            id: "",
            title: "",
            description: "",

            company: [],
            companies: [],

            city: [],
            cities: [],

            salary: null,

            project: [],
            projects: [],

            timeline: null,
            createdDate: "",
            updatedDate: "",

        }
    },
    methods: {
        addCompany(newTag) {
            const tag = {
                companyName: newTag,
            }
            this.company.push(tag)
            this.companies.push(tag)
        },
        addCity(newTag) {
            const tag = {
                cityName: newTag,
            }
            this.city.push(tag)
            this.cities.push(tag)
        },
        addProject(newTag) {
            const tag = {
                projectName: newTag,
            }
            this.project.push(tag)
            this.projects.push(tag)
        },

        checkForm: function (e) {

            if ((title) === '' || (description) === '' || (companies) === '' || (cities) === '' || (projects) === '' || (salary) === '' || (timeline) === '') {
                alert("Please enter all details of your Dream Job!!")
                return
            }

            this.errors = []
            this.errors1 = []
            if (!this.title) {
                this.errors.push('Dream job title required.')
            }

            if (!this.description) {
                this.errors.push('Dream job description required.')
            }
            if (this.companies == 0) {
                this.errors.push('Dream company name is required')
            }
            if (this.cities == 0) {
                this.errors.push('Location preference value is required')
            }
            if (!this.salary) {
                this.errors.push('Expected salary is required.')
            }
            if (this.projects == 0) {
                this.errors.push('Dream project name is required')
            }
            if (!this.timeline) {
                this.errors.push('Timeline duaration is required.')
            }
            /* create method*/
            const id = uuidV4()
            const companyId = uuidV4()
            const cityId = uuidV4()
            const projectId = uuidV4()
            const title = this.title
            const companyName = this.companies
            const cityName = this.cities
            const projectName = this.projects
            const description = this.description
            const companies = [{
                companyId: companyId,
                companyName: this.companies
            }]
            const cities = [{
                cityId: cityId,
                cityName: this.cities,
                state: "Delhi",
                country: "India"
            }]
            const salary = this.salary
            //const projects = [{projectId:projectId,projectName:this.projects}]
            const projects = [{
                projectId: projectId,
                projectName: this.projects
            }]
            const timeline = this.timeline
            const createdDate = new Date()
            const updatedDate = new Date()
            const username = this.user.username

            this.title = ''
            this.description = ''
            this.companies = ''
            this.cities = ''
            this.salary = ''
            this.projects = ''
            this.timeline = ''
            const dreamJobId = uuidV4()

            const dreamJobs = {
                id,
                dreamJobId,
                title: title,
                description: description,
                companies: companies,
                cities: cities,
                salary: salary,
                projects: projects,
                timeline: timeline,
                createdDate: createdDate,
                updatedDate: updatedDate,
                username: username
            }
            this.$apollo.mutate({
                    mutation: CreateDreamJob,
                    variables: dreamJobs,
                    update: (store, {
                        data: {
                            createDreamJob
                        }
                    }) => {
                        const data = store.readQuery({
                            query: ListDreamJobs
                        });
                        data.listDreamJobs.items.push(createDreamJob);
                        store.writeQuery({
                            query: ListDreamJobs,
                            data
                        });
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
        project: {
            query: () => ListDreamProjects,
            update: data => data.listProjects.items
        },
        dreamJob: {
            query: () => ListDreamJobs,
            update: data => data.listDreamJobs.items
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
    padding-top: 0px;
}
</style>
