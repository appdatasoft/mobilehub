import gql from 'graphql-tag'
export default gql`

  mutation createDreamJob($id: ID!,$dreamJobId:ID!,$title: String!,$description: String!,$companies: [CreateCompanyInput!]!,
              $cities:[CreateCityInput!]!,$salary: Int!,$projects: [CreateProjectInput!]!,$timeline: Int!,$username: String!,$createdDate: AWSDateTime!,$updatedDate: AWSDateTime!){
      createDreamJob(input: {
        id:$id,
        dreamJobId:$dreamJobId
        title:$title,
        description:$description,
        companies: $companies,
        cities:$cities,
        salary:$salary,
        projects:$projects,
        timeline:$timeline,
        username: $username,
        createdDate: $createdDate,
        updatedDate: $updatedDate
      })
      {
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
          state
          country
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

`