import gql from 'graphql-tag'
    export default gql`
    query listoneUsertypes($username:String){
        listUsertypes(filter: {username:{
        contains: $username
    }}) 
    {
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