import gql from 'graphql-tag'
  export default gql`
    query list($error:String){
        listBugs(filter: {error:{
        contains: $error
    }}) 
      {
        items {
          error
          code
          username
        }
    }
  }
  `