<template>
  <b-container>
    <div class="ui container" id="mainbox">
      <div class="ui segment">
        <div>
          <div class="ui dividing header">Welcome {{ user.username }}:</div>
          <p class="ui small pointing below label">Please select your role here</p>
          <div class="ui dividing header">I am a</div>
          <br/>
        </div>
        <form>
          <div class="ui four cards">
          <div class="UserType" v-for="(UserType, index) in usertypes" :key="index">         
          <!-- Card 1  -->
           <div class="ui cards">
          <a class="green  card">
            <div class="content">              
              <div class="header">{{UserType.usertype}}
                <div class="ui right floated fitted checkbox">
                  <input v-model="developer" type="checkbox">
                  <label></label>
                </div>
              </div>
            </div>
          </a>
           &nbsp;
           &nbsp;
           </div>
           &nbsp;
        </div>
          </div>
          
        <!-- <button @click="createJobPost()" class="ui right floated circular primary button">Save</button> -->
        <button @click="createJobPost()" class="ui right floated circular primary submit button">Save</button>
        <br>
        <br>
        </form>
   </div>
    <div class="ui six wide column">
      <div class="ui segment">
        <h1 class="ui dividing header">Current User selected Type(s):</h1>
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
          data.listUserTypes.items.push(createUsertype)
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
         usertype:'',
          usertypes: [],
          oneusertypes:[],

    }
  },
     apollo: {
    usertypes: {
      query: () => ListUserType,
      update: data => data.listUSERtypes.items
    },
     oneusertypes: {
      query:() => ListoneUserType,
      variables() {
        return {
          username: this.user.username
          }
        },
       update: data => data.listUSERtypes.items
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
/* .Hiring{
  padding-left:30% ;
  margin-top:50px;

} */
/* #column_2{
 width: 80%;
 padding-top:20px ;
} */
/* #column_2_segment{
  width: 0%;
}
#side_bar{
  padding-top:20px ;
  padding-left:20px; 
} */
</style>