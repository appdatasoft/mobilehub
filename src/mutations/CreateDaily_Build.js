import gql from 'graphql-tag'

export default gql`
  mutation createDaily_Build( $username:String!, $code: String!,$problem:String!,$solution:String!,$title:String!,$language:String!,$price:String!) {
    createDaily_Build(
      input: {
       username:$username,
       code:$code,problem:$problem,solution:$solution,title:$title,language:$language,price:$price
      }
    ) {
    id
    title
    code
    price
    problem
    solution
    username
    language
    }
  }
`