// queries/ListTasks.js
import gql from 'graphql-tag'
//import { mapState } from 'vuex'
//const username1 = this.user.username

//var username="sumithra2"
//var username=$username
//const username = state.auth.user.username
//contains:"${username}"
//var username=user.username
//var username=getUserName()
  export default gql`
    query listUserTasks($username: String){
      listTasks(filter: {username:{
        contains:$username
    }}) 
      {
        items {
          id
          name
          completed
          username
      }
    }
  }
    `