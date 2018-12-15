import gql from 'graphql-tag'
  export default gql`
    query listUserJobPosts($username:String){
        listJobPosts(filter: {username:{
        contains: $username
    }}) 
      {
      items {
      title
      Job_Description
      Technologies_used
      Tools_Used
      Team_Description
      Salary
      username
      }
    }
  }
  `