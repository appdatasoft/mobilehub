import gql from 'graphql-tag'
export default gql`
  mutation updateBugDetails($id: ID!, $error: String!, $code: String, $language:String,$price:String,$username:String) {
    updateBugDetails(
      input: {
       id:$id
       error:$error,
       code:$code,
       language:$language,
       price:$price,
       username:$username
    }
  ) {
      id
      error
      code
      language
      price
      username
    }
  }
`