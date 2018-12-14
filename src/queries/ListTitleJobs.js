import gql from 'graphql-tag'
  export default gql`
    query listJobPosts($title:String){
        listJobPosts(filter: {title:{
        contains: $title
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