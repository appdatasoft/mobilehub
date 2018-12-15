import gql from 'graphql-tag'
export default gql`
    query listUserBugs($username: String){
      listBugs(filter: {username:{
        contains:$username
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