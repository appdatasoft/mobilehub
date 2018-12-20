<template>
<div class="container">
    <div v-for="(bug, index) in bugsTitle" :key="index">
        <div class="ui header dividing">
          <p >
            <strong>Error</strong><br>
              {{ bug.error  }}
          </p>
          <p>
            <strong>Code</strong><br>
              {{ bug.code  }}
          </p>
          <p>
            <strong>Language</strong><br>
              {{ bug.language  }}
          </p>
          <p>
            <strong>Price</strong><br>
              {{ bug.price  }}
          </p>
          <p>
            <strong>Created by user </strong><br>
              {{ bug.username  }}
          </p>                        
        </div>
        <br>              
        <br>
        <div class="ui dividing"></div>
        </div>   
</div>
</template>

<script>

import ListBugDetails from "../../queries/ListBugDetails"
import ListBugTitleDetails from"../../queries/ListBugTitleDetails"

import {
    mapState
  } from 'vuex'
  
export default {
    
    computed: {
      ...mapState({
        user: state => state.auth.user,
      })
    },
    apollo: {
    bugs: {
      query: () => ListBugDetails,
      update: data => data.listBugDetails.items
    },
    bugsTitle:{
      query:() => ListBugTitleDetails,     
      variables(){
        return{
           error:this.$route.params.error
        }
      },
      update: data => data.listBugDetails.items 
      }
    }
}
</script>