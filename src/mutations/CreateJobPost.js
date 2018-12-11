import gql from 'graphql-tag'
export default gql`
  mutation createJobPost($title:String!, $Job_Description: String!, $Technologies_used: String!,$Tools_Used: String!,$Team_Description: String!,$Salary: String!) {
    createJobPost(
      input: {
        title:$title, Job_Description: $Job_Description, Technologies_used: $Technologies_used, Tools_Used:$Tools_Used, Team_Description:$Team_Description, Salary:$Salary
      }
    ) {
      title
      Job_Description
      Technologies_used
      Tools_Used
      Team_Description
      Salary
    }
  }
`