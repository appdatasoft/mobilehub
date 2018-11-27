import gql from 'graphql-tag'

export default gql`
  mutation createTask($username:String $name: String!, $completed: Boolean!) {
    createTask(
      input: {
       username:$username  name: $name, completed: $completed
      }
    ) {
      username
      id
      name
      completed
    }
  }
`