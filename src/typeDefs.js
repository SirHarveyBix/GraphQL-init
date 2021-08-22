import { gql } from 'graphql-modules';

export const typeDefs = gql`
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    me: User!
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
