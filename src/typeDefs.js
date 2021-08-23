import { gql } from 'graphql-modules';

export const typeDefs = gql`
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments(query: String): [Comment!]!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
  }
  type Comment {
    id: ID!
    textField: String!
  }
`;
