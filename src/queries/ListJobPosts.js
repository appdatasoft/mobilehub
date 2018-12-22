import gql from 'graphql-tag'
  export default gql`
    query listJobPosts {
        listJobPosts {
        items {
          id
          title
          Job_Description
          Technologies_used
          Tools_Used
          Team_Description
          Salary 
          username 
          date
        }
      }
    }
    `