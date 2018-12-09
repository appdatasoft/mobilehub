//created new file named as Bug_Title.vue page in "src/components/Developer/" path location

// Bug_Title.vue full code 

<template>
          <!-- using Semantic Class -->
    <div class="ui stackable six column grid">
      <!--   Left Menu     -->
      <div class="column" id="column_1">
        <v-menuleft/>
      </div>
      <!--    End of Left Menu     -->

      <!--    Main Menu & text box      -->
        <div class="ten wide column" id="column_2">
          
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
            <a href="/bugfixMarket" class="active step">
              <i class="bug icon"></i>
                <div class="content">
                  <div class="title">Bug fix market</div>
                  <div class="description">Choose bug fixing market options</div>
                </div>
            </a>
            <a href="/startupsDeveloper" class="active step">
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
                        <h1 class="header">error <button class="ui button primary">follow</button></h1>
                        
                    </div>
                    <div class="eight wide column">
                        <p>
                            <i class="dollar sign icon">
                            </i>20 <button class="ui button primary">fix</button>
                        </p>
                        
                    </div>
                </div>
                  <div class="ui six wide grid">
                <div class="eleven wide column">
                    <!-- <div class="eight wide column"> -->
                    <span class="ui red text" id="error_color">
                        error: Property name "hiring" is not PascalCase
                         (vue/name-property-casing)
                         at src\components\Hiring\Job_Posts.vue:106:10:<br>
                            104 |<br>
                             105 | export default {<br>
                            >106 |    name: 'hiring',<br>
                            |          ^<br>
                             107 |     computed: {<br>
                             108 |         ...mapState({<br>
                             109 |             user: state => state.auth.user,<br>

                    </span>
                    <h1 class="header">code</h1>
                    <span>
                        const router = new Router({ mode: "history", routes })<br>
                        // this routine will ensure that any pages marked as `auth` in the `meta` section are<br>
                        // protected from access by unauthenticated users.<br>
                            router.beforeEach((to, from, next) => {<br>
                        // Use the page's router title to name the page<br>
                        if (to.meta && to.meta.title) {<br>
                        document.title = to.meta.title<br>
                        }


                    </span>
                    </div>
                
               
                <div class="column">
                    <div class="ui vertical menu">
                        <div class="item">
                            <div class="ui small dividing header">
                                <div class="header">Invitations sent</div>
                                    <div class="menu">
                                    <p  class="item">Bill</p>
                                    <p  class="item dividing">Kenny</p>
                                </div>
                            </div>
                            <div class="ui small dividing header">
                                <div class="header">Invitations Recieved</div>
                                    <div class="menu">
                                    <p  class="item">Dave</p>
                                    <p  class="item dividing">Frank</p>
                                </div>
                            </div>
                            <div class="ui small header">
                                <div class="header">Invitations accept</div>
                                    <div class="menu">
                                    <p  class="item ">Sophie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
          <!-- end of the form -->
          </div>
        </div>
      <!-- </div> -->
  
  
</template>



<script>
  import {
    mapState
  } from 'vuex'
  
  export default {
    name: 'Bugfix_Market',
    computed: {
      ...mapState({
        user: state => state.auth.user,
      })
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
    padding-top: 25px;
  }
  #error_color{
      color:red;
  }
</style>