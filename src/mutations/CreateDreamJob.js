import gql from 'graphql-tag'

export default gql`
  mutation createDreamJob( $title:String!, $describe:String!, $salary:Int!, $duration:Int!, $user:String!) {
    createDreamJob(
      input: {
         title:$title, describe:$describe, salary:$salary, duration:$duration, user:$user
      }
    ) {
        id
        title
        describe
        salary
        duration
        user
    }
  }
`