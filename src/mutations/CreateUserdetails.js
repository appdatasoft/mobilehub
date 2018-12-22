import gql from 'graphql-tag'
export default gql`
mutation createUserdetails($username:String, $usertypes: [String], $date: String) {
createUserdetails(
input: {
username:$username, usertypes:[$usertypes], date:$date
}
) {
username
usertypes
date
}
}`