import { GraphQLServer } from 'graphql-yoga';
import db from './data/db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import User from './resolvers/User';
import Comment from './resolvers/Comment';
import Post from './resolvers/Post';

const server = new GraphQLServer({
  typeDefs: './src/typeDefs.graphql',
  resolvers: {
    Query,
    Mutation,
    User,
    Post,
    Comment,
  },
  context: { db },
});

server.start(() => {
  console.log(`Server default runs on :4000`);
});
