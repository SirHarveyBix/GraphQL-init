import { GraphQLServer } from 'graphql-yoga';

//scalar types : String, ID, Boolean, Int, Float

const typeDefs = `
    type Query {
       id :ID!
       name : String!
       age: Int!
       employed: Boolean!
       rating: Float
       title: String
       price: Float
       inStock: Boolean
    }
`;

const resolvers = {
  Query: {
    id() {
      return 'ABC-123';
    },
    name() {
      return 'name';
    },
    employed() {
      return true;
    },
    age() {
      return 33;
    },
    rating() {
      return 3.7;
    },
    title() {
      return 'Movie Title';
    },
    price() {
      return 42;
    },
    inStock() {
      return false;
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log('Server runs by default on :4000');
});
