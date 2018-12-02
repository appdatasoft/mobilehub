// queries/ListTasks.js
import gql from 'graphql-tag'
  export default gql`
    query listUserTasks {
      listTasks(filter: {username: "sumi"})
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