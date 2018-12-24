import gql from 'graphql-tag'
  export default gql`
    query ListBugTitleDetails($error:String){
        listBugDetails(filter: {error:{
        contains: $error

    }}) 
      {
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