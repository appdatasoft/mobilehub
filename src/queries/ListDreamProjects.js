import gql from 'graphql-tag'
export default gql`
query listDreamProjects {
    listDreamProjects {
        items {
          id
          projectName
        }
    }
}
`