import gql from 'graphql-tag'
export default gql`
query listUserdetails{
listUserdetails{
items {
username
date
usertypes
}
}
}
`
 
// ($username:String,$usertype:String , $date: String){
// listUserdetails(filter: {username:{
// contains: $username