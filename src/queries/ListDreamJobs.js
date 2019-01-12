import gql from 'graphql-tag'
  export default gql`
    query listDreamJobs {
      listDreamJobs {
        items {
        id
        title
        describe
        salary
        duration
        user
        }
      }
    }
    `