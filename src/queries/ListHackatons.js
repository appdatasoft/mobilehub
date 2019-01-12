import gql from 'graphql-tag'
  export default gql`
    query listHackatons {
        listHackatons {
        items {
    city
    id
    state
    username
    startdate
    title
    enddate
    starttime
    address1
    address2
    endtime
    companyname
    joblist
    zip
        }
      }
    }
    `