import gql from 'graphql-tag'
export default gql`
query listUserProblems($username: String){
  
  listProblems(filter: {username:{
        contains:$username
    }})   
    {
      items {
        title
        description
        priority 
        comments
        status
        date
        id
        username
      }
    }
  } 
  `