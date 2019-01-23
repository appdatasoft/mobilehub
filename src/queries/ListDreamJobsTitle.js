import gql from 'graphql-tag'
 export default gql`
 query listDreamJobs($title: String){
 listDreamJobs(filter:{
 title:{contains:$title}}) {
 items{
 id
 dreamJobId
 title
 description
 companies{
 companyId
 companyName
 }
 cities{
 cityId
 cityName
 }
 salary
 projects{
 projectId
 projectName
 }
 timeline
 username
 createdDate
 updatedDate
 }
 }
 }
`