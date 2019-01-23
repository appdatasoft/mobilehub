<template>
  <!-- <div class="column" id="column_1">
      <v-menuleft/>
      <v-dreamjobsteps />
  </div>-->
  <div class="ui grid" id="column_1">
    
    <div class="three column row">
      <div class="four wide column"> </div>
      <div class="six wide column">
      <div class="ui two item pointing compact menu">
          <router-link :to="`/dreamjob`" class="ui item">Create Dreamjob</router-link>
          <router-link :to="`/DreamjobTimeline`" class="ui item">Dreamjob Timeline</router-link>
        </div>
      </div>
    </div>


    <div class="three column row" >
         <!-- first column  -->
      <div class="eight wide center aligned page column">
         <div class="ui dividing header">
         <div v-for="(job, index) in dreamJobTitle" :key="index">
         
            <p>{{job.title}}</p>
          </div>
        </div>

        <h3>Your dream job description:</h3>
        <div v-for="(job, index) in dreamJob" :key="index">
          <label>&emsp; {{job.description}}</label>
        </div>

        <h3>Your dream companies:</h3>
             <div v-for="(job, index) in company" :key="index">
                  <option>{{job.companyName}}</option>
                </div>

        <h3>Location Preferences:</h3>
        <div v-for="(job, index) in city" :key="index">
          <option>{{job.cityName}}</option>
        </div>

        <h3>Salary Requirement in $:</h3>
        <div v-for="(job, index) in dreamJob" :key="index">
          <label>&emsp; {{job.salary}}</label>
        </div>

        <h3>Projects you would like to work on:</h3>
        <div v-for="(job, index) in dreamJob" :key="index">
          <label>&emsp; {{job.projectName}}</label>
        </div>

        <h3>Timeline in months:</h3>
        <div v-for="(job, index) in dreamJob" :key="index">
          <label>&emsp; {{job.duration}}</label>
        </div>
      </div>

      <!-- second column  -->
      <div class="four wide column" id="column_2">
                    <div class="ui dividing header">

                    </div>

       
      </div>

        <!-- third column  -->
      <div class="four wide column">
        <div class="ui centered dividing header"></div>
        <router-link :to="``" class="ui compact flat left floated primary button">Edit</router-link>
        <router-link :to="``" class="ui compact flat left floated red button">Delete</router-link>
      </div>
    </div>
     </div>
</template>


<script>
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
import ListDreamJobTitle from '../../queries/ListDreamJobsTitle'
import ListDreamJobsTitle from '../../queries/ListDreamJobsTitle';

export default {
    name: "DreamJobProfile",
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
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
        },
        dreamJobTitle: {
            query: () => ListDreamJobsTitle,
               variables() {
        return {
          title: this.$route.params.title
        }
        },
        update: data => data.listDreamJobs.items
    },
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
    padding-left: 10px;
}
</style>