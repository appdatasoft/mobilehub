<template>
  <div id="app">
    <b-container 
      class="main" 
      fluid>
      <span v-if="isAuthenticated">
      <v-menu1/>
      </span>
      <div 
        id="app" 
        v-if="hydrated">
        
       <!-- <v-sidemenu/> --> 
        </div>
        <router-view/>
      
      <v-footer/>
    </b-container>
  </div>
</template>
<script>
import Vue from 'vue'
import Menu from '@/components/Menu.vue'
import Menu1 from '@/components/Menu1.vue'

import Footer from '@/components/Footer.vue'
import MenuLeft from '@/components/MenuLeft.vue'
import FormComponent from '@/components/FormComponent.vue'
import { mapState } from 'vuex'


Vue.component('v-menu', Menu)
Vue.component('v-menu1', Menu1)
Vue.component('v-menuleft', MenuLeft)

Vue.component('v-footer', Footer)
Vue.component('v-formcomponent', FormComponent)
export default {
  name: 'App',
   computed: {
        ...mapState({
            user: state => state.auth.user,
            isAuthenticated: state => state.auth.isAuthenticated,
        })
        },
  data: () => ({ hydrated: false }),
  async mounted() {
    await this.$apollo.provider.defaultClient.hydrated()
    this.hydrated = true
}
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

.main{
  margin: 0;
  padding: 0;
}

.fa-icon {
    top: .125em;
    position: relative;
}

.b-main-content {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
}

.b-form-1 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: .2rem;
}

</style>