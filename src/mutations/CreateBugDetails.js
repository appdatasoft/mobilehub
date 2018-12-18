import gql from 'graphql-tag'

export default gql`
  mutation createBugDetails( $error: String!, $code: String!, $language:String!,$price:String!,$username:String!) {
    createBugDetails(
      input: {
       error:$error, code:$code,language:$language,price:$price,username:$username
      }
    ) {
      error
      code
      language
      price
      username
    }
  }
`