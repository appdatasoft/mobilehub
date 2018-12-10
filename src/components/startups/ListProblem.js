  // queries/ListTasks.js
import gql from 'graphql-tag'
export default gql`
  query listProblems {
    listProblems {
      items {
      id 
      title
      description
      priority
      date
      comments 
      status
      }
    }
  } 
  `