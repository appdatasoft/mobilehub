import gql from 'graphql-tag'
  export default gql`
    query ListBugTitleDetails($error:String){
        listBugDetails(filter: {error:{
        contains: $error
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