// queries/ListTasks.js
import gql from 'graphql-tag'
  export default gql`
    query listUserTasks {
      listTasks(filter: {username:{
        contains:"sumithra"
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