import gql from 'graphql-tag'

export default gql`
  mutation createBugs( $error: String!,$username:String!, $code: String!) {
    createBugs(
      input: {
       error:$error, code:$code,username:$username

      }
    ) {
      error
      code
      username
    }
  }
`