// queries/ListTasks.js
import gql from 'graphql-tag'
  export default gql`
    query listUserTasks {
      listTasks {
        items {
          id
          name
          completed
        }
      }
    }
    `