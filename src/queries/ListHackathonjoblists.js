import gql from 'graphql-tag'
export default gql`
query  listHackathonjoblists {
    listHackathonjoblists {
items {
    id
    joblist
}
}
}`