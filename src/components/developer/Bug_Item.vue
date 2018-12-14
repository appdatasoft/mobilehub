<template>
<div class="container">
    <h3 class="header center"> welcome {{user.username}}</h3>
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
        </div>
        <br>              
        <br>
        <div class="ui dividing"></div>
        </div>   
</div>
</template>

<script>
import CreateBugs from "../../mutations/CreateBugs";
import ListBugs from "../../queries/ListBugs";
import ListTitleBugs from"../../queries/ListTitleBugs"
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
      query: () => ListBugs,
      update: data => data.listBugs.items
    },
    bugsTitle:{
      
      query:() => ListTitleBugs,     
      variables(error){
        return{
           error:"chai",
         
        }
      },
      update: data => data.listBugs.items 
      }
    }
}
</script>