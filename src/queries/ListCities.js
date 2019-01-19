import gql from 'graphql-tag'
export default gql`
query listCities{
    listCities{
      items{
        cityId
        cityName
        state
        country
      }
    }
  }
`