import gql from 'graphql-tag'
    export default gql`
      query listUSERtypes {
        listUSERtypes
         {
          items {
            usertype
          }
        }
      }
      `