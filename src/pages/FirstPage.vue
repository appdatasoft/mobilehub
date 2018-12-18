<template>
  <b-container>
    <div class="ui container" id="mainbox">
      <div class="ui segment">
        <div>
          <div class="ui dividing header">Welcome {{ user.username }}:</div>
          <p class="ui small pointing below label">Please select your role here</p>
          <div class="ui dividing header">I am a</div>
        </div>
        <!-- A row of four column semantic cards -->
        <form>
        <div class="ui four cards">
          <!-- Card 1  -->
          <a class="green card">
            <div class="content">
              <div class="header">{{userType1}}
                <div class="ui right floated fitted checkbox">
                  <input v-model="developer" type="checkbox">
                  <label></label>
                </div>
              </div>
            </div>
          </a>
          <!-- card 2 -->
          <a class="teal card">
            <div class="content">
              <div class="header">Hiring Manager
                <div class="ui right floated fitted checkbox">
                  <input v-model="hiring" type="checkbox">
                  <label></label>
                </div>
              </div>
            </div>
          </a>
          
          <a class="blue card">
            <div class="content">
              <div class="header">
                <div class="ui right floated fitted checkbox">
                  <input v-model="startup" type="checkbox">
                  <label></label>
                </div>
              </div>
            </div>
          </a>
          <a class="violet card">
            <div class="content">
              <div class="header">BuStartupsiness Owner
                <div class="ui right floated fitted checkbox">
                  <input v-model="business" type="checkbox" value="business">
                  <label></label>
                </div>
              </div>
            </div>
          </a>
        </div>
        <br>
        <!-- <button @click="createJobPost()" class="ui right floated circular primary button">Save</button> -->
        <button @click="createJobPost()" class="ui right floated circular primary submit button">Save</button>
        <br>
        <br>
        </form>
   </div>
    <div class="ui six wide column">
      <div class="ui segment">
        <h1 class="ui dividing header">Current User selected Type(s):</h1>
          <!-- <div class="UserType" v-for="(UserType, index) in oneusertypes" :key="index">
           <h1> You are selected following fields:<br/></h1>
          <h5 v-if="UserType.hiring">hiring</h5>  <br/>  
          <h5 v-if="UserType.developer">developer</h5>  <br/>  
          <h5 v-if="UserType.startup">startup</h5>  <br/>  
          <h5 v-if="UserType.business">business</h5>  <br/>  
            </div>  -->
          <div class="UserType" v-for="(UserType, index) in oneusertypes" :key="index">
             <div class="ui container">

            <h2> You are intrested in following fields:</h2>
             <!-- <div class="ui four cards"> -->
           <h3 v-if="UserType.hiring"><router-link :to="'/hiring'">Hiring </router-link></h3>  
          <h3 v-if="UserType.developer"> <router-link :to="'/developer'">Developer</router-link></h3>  
          <h3 v-if="UserType.startup"><router-link :to="'/startups'">Startup</router-link></h3>    
          <h3 v-if="UserType.business"> <router-link :to="'/smb'">Business Owner</router-link></h3>  
           </div>  
           </div>
          </div>
          </div>
      </div> 
    <!-- </div> -->
  </b-container>
</template>  

<script>
import ListUserType from '../queries/ListUserTypes'
import ListoneUserType from '../queries/ListoneUserTypes'
import CreateUserType from '../mutations/CreateUserType'
import uuidV4 from 'uuid/v4'
import { mapState } from 'vuex'
export default {
   name: 'jobPosts',
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    },
    methods: {
      createJobPost() {

      const developer = this.developer
      const hiring = this.hiring
      const startup = this.startup
      const business = this.business
      const username = this.user.username  
     
      if ((hiring) === '' && (startup === '') && (business === '') && (developer === '') ) {
        alert('please enter all fields')
        return
      }
      this.hiring = ''
      this.startup = ''
      this.business = ''
      this.developer= ''
      const id = uuidV4()
      const JobPost = {
        username:username,
        developer:developer,
        hiring: hiring,
        id,
        startup :startup,
        business:business,
      }
      this.$apollo.mutate({
        mutation: CreateUserType,
        variables: JobPost,
        update: (store, { data: { createUsertype } }) => {
          const data = store.readQuery({ query: ListUserType })
          data.listUsertypes.items.push(createUsertype)
          store.writeQuery({ query: ListUserType, data })
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createUsertype: {
            __typename: 'usertype',
            ...JobPost
          }
        },
      })
      .then(data => console.log(data))
      .catch(error => console.error("error!!!:", error))
    },
  },
  data () {
    return {
         developer:'',
         hiring:'',
         startup:'',
         business:'',
         username:'',
          usertypes: [],
          oneusertypes:[],

    }
  },
     apollo: {
    usertypes: {
      query: () => ListUserType,
      update: data => data.listUsertypes.items
    },
     oneusertypes: {
      query:() => ListoneUserType,
      variables() {
        return {
          username: this.user.username
          }
        },
       update: data => data.listUsertypes.items
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.Hiring{
  padding-left:30% ;
  margin-top:50px;

}
#column_2{
 width: 80%;
 padding-top:20px ;
}
#column_2_segment{
  width: 0%;
}
#side_bar{
  padding-top:20px ;
  padding-left:20px; 
}
</style>