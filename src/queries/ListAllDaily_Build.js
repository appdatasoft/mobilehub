import gql from 'graphql-tag'
  export default gql`
    query listDaily_Builds {
        listDaily_Builds {
        items {
            id
          code
          title
          problem
          solution
          language
          price 
          username
        }
      }
    }
    `