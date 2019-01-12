import gql from 'graphql-tag'
export default gql`
query listDreamCompanies {
    listDreamCompanies {
        items {
          id
          companyName
        }
    }
}
`