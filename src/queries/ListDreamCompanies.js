import gql from 'graphql-tag'
export default gql`
query listCompanies{
    listCompanies{
      items{
        companyId
        companyName
      }
    }
  }
`