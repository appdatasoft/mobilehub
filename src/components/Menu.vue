<template>
  <b-navbar 
    toggleable="md" 
    type="dark" class="navbar-inner">
    <b-navbar-toggle target="nav_collapse"/>
    <b-navbar-brand to="/"><img src="" srcset="../assets/hohlogo.png 1x" width= "20%" alt="hackohire for happy teams"></b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item v-if="!isAuthenticated" to="/storiesHome">Hack Stories</b-nav-item>
      <b-nav-item v-if="!isAuthenticated" to="/developer_home">Dream Jobs</b-nav-item>
      <!--<b-nav-item v-if="!isAuthenticated" to="/hiring_home">Hiring</b-nav-item>-->
      <b-nav-item v-if="!isAuthenticated" to="/startups_home">Startups</b-nav-item>
      <b-nav-item v-if="!isAuthenticated" to="/SMB_home">Business</b-nav-item>
      <!--<b-nav-item to="/pricing">Pricing</b-nav-item>-->
    </b-navbar-nav>
     <b-navbar-nav>
      <b-nav-item v-if="isAuthenticated" to="/developer">Stories</b-nav-item>
      <b-nav-item v-if="isAuthenticated" to="/developer">Dream Job</b-nav-item>
      <b-nav-item v-if="isAuthenticated" to="/hiring">Hiring</b-nav-item>
      <b-nav-item v-if="isAuthenticated" to="/startups">Startups</b-nav-item>
      <b-nav-item v-if="isAuthenticated" to="/smb">Business</b-nav-item>
      <!-- <b-nav-item v-if="isAuthenticated" to="/Timeline">Timeline</b-nav-item>   -->
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item 
        v-if="!isAuthenticated" 
        class="nav-btn" 
        to="/signIn"><span class="nav-username">Sign In</span></b-nav-item>
      <b-nav-item-dropdown 
        v-if="isAuthenticated" 
        right>
        <template slot="button-content">
          <icon name="user-circle"/><strong class="nav-username">{{ user.username }}</strong>
        </template>
        <b-row 
          class="justify-content-md-center" 
          style="margin:5px">
          <b-dropdown-item to="/changePassword"><span class="nav-username">Change Password</span></b-dropdown-item>
          <b-dropdown-item to="/signOut"><icon name="sign-out"/><span class="nav-username">Sign Out</span></b-dropdown-item>
        </b-row>
      </b-nav-item-dropdown>
      <b-nav-item 
        class="nav-btn" 
        href="https://twitter.com/hackohire"><icon name="twitter"/></b-nav-item>
      <b-nav-item 
        class="nav-btn" 
        href="https://github.com/appdatasoft/mobilehub/tree/origin/DEV"><icon name="github"/></b-nav-item>
        <b-nav-item 
        class="nav-btn" 
        href="https://www.linkedin.com/company/hackohire/"><icon name="linkedin"/></b-nav-item>
    </b-navbar-nav>
    
    
  </b-navbar>    
</template>

<script>
import { mapState } from 'vuex'
import 'vue-awesome/icons/user-circle'
import 'vue-awesome/icons/sign-out'
import 'vue-awesome/icons/github'
import 'vue-awesome/icons/twitter'
import 'vue-awesome/icons/linkedin'
export default {
    name: 'Navbar',
    computed: {
        ...mapState({
            user: state => state.auth.user,
            isAuthenticated: state => state.auth.isAuthenticated,
        })
    },
    methods: {
        signIn() {
            this.$store.dispatch('signIn')
        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: #563d7c;
}
.navbar-nav .nav-link {
    color: #cbbde2;
}
.nav-username {
  padding-left: .5em;
  padding-right: .5em;
}
/*.navbar-inner{
   background-color:transparent;
}*/
</style>