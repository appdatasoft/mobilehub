import gql from 'graphql-tag'
  export default gql`
    query listBugDetails {
      listBugDetails {
        items {
          id
          error
          code
          language
          price
          username
        }
      }
    }
    `