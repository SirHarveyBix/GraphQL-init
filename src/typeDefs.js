import { gql } from 'graphql-modules';
//scalar types : String, ID, Boolean, Int, Float // ! => must be filled

//Schema
export const typeDefs = gql`
  type Query {
    greeting(name: String!, pos: String): String!
    me: User!
    post: Post!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;
