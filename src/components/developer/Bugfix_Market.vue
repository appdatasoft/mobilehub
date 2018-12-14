<template>
          <!-- using Semantic Class -->
    <div class="ui stackable six column grid">
      <!--   Left Menu     -->
      <div class="column" id="column_1">
        <v-menuleft/>
      </div>
  
      <!--    End of Left Menu     -->
  
  
      <!--    Main Menu & text box      -->
      <div class="column" id="column_2">
        <div class="ui stackable grid container">
        <div class="twenty wide column">
          
          <div class="ui tiny four steps">
            
            <a href="/dreamJob" class="active step">
              <i class="paper plane icon"></i>
                <div class="content">
                  <div class="title">Dream job</div>
                  <div class="description">Choose your dream job</div>
                </div>
            </a>
            <a href="/dailyBuild" class="active step">
              <i class="edit outline icon"></i>
                <div class="content">
                  <div class="title">Daily build</div>
                  <div class="description">Choose your daily build options</div>
                </div>
            </a>
            <a class="active step">
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

            <!--- form -->

          <div class="ui grid">  
            <div class="eight wide column">
              <h1 class="header">Bugs List</h1>
            </div>
            <div class="eight wide column">
              <!-- <i>error</i> -->
                <b-nav>
                <b-nav-item to="/Bug_Title">
                  <button  class="ui button primary ">found new bug?</button>
                </b-nav-item>
                </b-nav>
            </div>
          </div>
          <!-- <div class="ui grid">
              <a href="/Bug_Title">
            <div class="five wide column">
              
              <p>Vue,GraphQL error</p>
              <i>&emsp;by {{user.username}}</i><i>&emsp;&nbsp;1 day ago</i>
                                          
            </div>
              </a>
            <div class="four wide column">
              <p><i class="dollar sign icon"></i>20 </p>
            </div>
          </div> -->
          
          <div v-for="(bug, index) in bugs" :key="index">
              <div class="ui header dividing">
                <p >
                  <strong>Error :</strong><br>
                    <!-- <a href="/Bug_Item">{{ bug.error  }}</a> -->
                  <router-link :to="`/${bug.error}`" @click="variables(bugs.error)">{{ bug.error  }}</router-link>  
                </p>
                <p>
                  <strong>Code :</strong><br>
                    {{ bug.code  }}
                </p>
                <p>
                  <strong>&emsp;by 
                  </strong><i>{{bug.username}}</i>
                </p>                        
              </div>
              <br>              
              <br>
              <div class="ui dividing"></div>
          </div>
          <!-- <div class="ui grid">
              <a href="/Bug_Title">
            <div class="five wide column">
              <p>Vue,GraphQL error</p>
              <i>&emsp;by {{user.username}}</i><i>&emsp;&nbsp;2 days ago</i>                            
            </div>
            </a>
            <div class="four wide column">
              <p><i class="dollar sign icon"></i>15 </p>
            </div>
          </div> -->
          <!-- end of the form -->

        </div>
      </div>
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
    name: 'Bugfix_Market',
    computed: {
      ...mapState({
        user: state => state.auth.user,
      }),/*, statement */
      /* path url code start here*/
      
    },
    apollo: {
    bugs: {
      query: () => ListBugs,
      update: data => data.listBugs.items
    },
    bugsTitle:{
      // query:() => ListTitleBugs,
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