import gql from 'graphql-tag'

export default gql`
  mutation deleteBugDetails($id: ID!) {
    deleteBugDetails(
      input: {
        id: $id
          }
    ) {
      id
    }
  }
`