import gql from 'graphql-tag'
  export default gql`
    query ListUserBugDetails($username:String){
        listBugDetails(filter: {username:{
        contains: $username
    }}) 
      {
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