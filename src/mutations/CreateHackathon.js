import gql from 'graphql-tag'

export default gql`
  mutation createHackaton($title: String!, $companyname: String!, $starttime: String!, $startdate: String!, $enddate: String!, 
   $endtime: String!,$address1: String!,$address2: String!
   $city: String!,$state: String!,$zip: Int!,$joblist:[String!]!, $username: String!) {
    createHackaton(
      input: {
      title: $title, companyname: $companyname, starttime: $starttime, zip: $zip, startdate:$startdate, username:$username,city:$city,
      state:$state,endtime:$endtime,enddate:$enddate,address1:$address1,address2:$address2,joblist:$joblist
      
      }
    ) {
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
    joblist
    endtime
    companyname
    zip
    } 
  }
`