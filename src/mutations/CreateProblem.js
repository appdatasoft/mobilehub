import gql from 'graphql-tag'

export default gql`
  mutation createProblem($title: String!, $description: String, $priority: String, $date: String!, $comments: String,  $status: String!) {
    createProblem(
      input: {
      title: $title, description: $description,  priority: $priority, date: $date, comments:$comments, status:$status

      }
    ) {
      title
      description
      id
      priority 
      comments
      status
      date
    } 
  }
`