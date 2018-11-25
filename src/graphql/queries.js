// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTask1ModelType = `query GetTask1ModelType($id: ID!) {
  getTask1ModelType(id: $id) {
    id
    name
    completed
  }
}
`;
export const listTask1ModelTypes = `query ListTask1ModelTypes(
  $filter: TableTask1ModelTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listTask1ModelTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      completed
    }
    nextToken
  }
}
`;
