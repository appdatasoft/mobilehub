<template>
  <!-- <div class="column" id="column_1">
      <v-menuleft/>
      <v-dreamjobsteps />
  </div>-->
  <div class="ui grid" id="column_1">
    <div class="three column row">
      <div class="four wide center aligned page column">
        <div class="ui segment">
          <div class="ui centered dividing header">My Dreamjobs</div>
          <router-link
            :to="`/dreamjob`"
            class="ui right floated green small compact circular button"
          >new dreamjob</router-link>
          <br>
          <br>
          <div v-for="(job, index) in dreamJob" :key="index">
            <p>
              <router-link :to="`/dreamjob/${job.title}`" class="ui item">{{job.title}}</router-link>
              <br>
            </p>
          </div>
        </div>
      </div>

      <div class="eight wide column">
        <div class="ui segment">
          <div class="ui centered dividing header">Jobs you are following</div>
          <div v-for="(job, index) in dreamJob" :key="index">
            <div class="ui segment">
              <router-link :to="`/dreamjob/${job.title}`" class="ui item">{{job.title}}</router-link>
              <br>by
              <router-link :to="`/userprofile/${job.username}`" class="ui item">@{{job.username}}</router-link>at
              <p>{{job.updatedDate}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="four wide column">
        <div class="ui segment">
          <div class="ui centered dividing header">Discover Dreamjobs</div>

          <div v-for="(job, index) in dreamJob" :key="index">
            <div class="ui segment">
              <router-link :to="`/dreamjob/${job.title}`" class="ui item">{{job.title}} &emsp;</router-link>
              <div class="ui mini right floated circular primary button">Follow</div>
              <br>
              <div v-if="job.description.length>=10">{{ job.description.substring(0,50)+".." }}</div>by
              <router-link :to="`/userprofile/${job.username}`" class="ui item">@{{job.username}}</router-link>
            </div>
          </div>
        </div>
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

export default {

    name: "DreamjobTimeline",
    computed: {
        ...mapState({
            user: state => state.auth.user
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
    padding-left: 2%;
    width: 50%;
}

#column_2 {
    padding-top: 50px;
    padding-left: 4%;
    width: 25%;
}
</style>


-----------------------------------------------------------------------------

Add the following lines in 

router/index.js

import DreamjobTimeline from '@/components/developer/DreamjobTimeline.vue'
import DreamJobProfile from '@/components/developer/DreamJobProfile.vue'

// other code

{
 path:'/DreamjobTimeline',
 name: 'DreamjobTimeline',
 component:DreamjobTimeline,
 meta:{title:'DreamjobTimeline',auth:true }
},
{
 path:'/Dreamjob/:title',
 name: 'DreamjobProfile',
 component:DreamJobProfile,
 meta:{title:'DreamjobProfile',auth:true }
},