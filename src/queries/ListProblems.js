import gql from 'graphql-tag'
export default gql`
  query listProblems {
    listProblems {
      items {
        title
        description
        priority 
        comments
        status
        date
        id
      }
    }
  } 
  `