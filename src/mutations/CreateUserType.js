import gql from 'graphql-tag'
export default gql`
  mutation createUsertype($username:String,$developer:Boolean, $hiring: Boolean, $startup: Boolean,$business: Boolean) {
    createUsertype(
      input: {
        username:$username, developer:$developer, hiring: $hiring, startup: $startup, business:$business
      }
    ) {
   username
   developer
   hiring
   startup
   business
    }
  }
`