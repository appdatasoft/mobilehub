import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Auth from "@aws-amplify/auth"
import AuthConfig from '@/aws-exports'
import AWSAppSyncClient from "aws-appsync"
import VueApollo from 'vue-apollo'
import appSyncConfig from './AppSync'

const client = new AWSAppSyncClient({
  url: appSyncConfig.graphqlEndpoint,
  region: appSyncConfig.region,
  auth: {
    type: appSyncConfig.authenticationType,
    apiKey: appSyncConfig.apiKey,
  }
},{
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    }
  }
})
const appsyncProvider = new VueApollo({
  defaultClient: client
})

Auth.configure(AuthConfig)

Vue.use(BootstrapVue)
Vue.use(VueApollo)
Vue.component('icon', Icon)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  provide: appsyncProvider.provide(),
  template: '<App/>',
  render: h => h(App),
})
