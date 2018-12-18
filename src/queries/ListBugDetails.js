import gql from 'graphql-tag'
  export default gql`
    query listBugDetails {
      listBugDetails {
        items {
          error
          code
          language
          price
          username
        }
      }
    }
    `