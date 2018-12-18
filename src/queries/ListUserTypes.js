import gql from 'graphql-tag'
    export default gql`
      query listUsertypes {
        listUsertypes {
          items {
            username
            developer
            hiring
            startup
            business
          }
        }
      }
      `