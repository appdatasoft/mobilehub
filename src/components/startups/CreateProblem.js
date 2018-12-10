import gql from 'graphql-tag'

export default gql`
  mutation createProblem($title: String!, $description: String, $priority: String, $comments: String,  $status: String, $date: Int) {
    createProblem(
      input: {
      title: $title, description: $description,  priority: $priority, comments:$comments, status:$status, date: $int,
      
      }
    ) {
      title
      id
      description
      priority 
      date
      comments
      status
     
    }
  }
`