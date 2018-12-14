import gql from 'graphql-tag'
export default gql`
query listProblemTitle($title: String){
  
  listProblems(filter: {
    title:{contains:$title}})   {
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