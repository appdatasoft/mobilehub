import gql from 'graphql-tag'
  export default gql`
    query listBugs {
      listBugs {
        items {
          error
          code
          username
        }
      }
    }
    `