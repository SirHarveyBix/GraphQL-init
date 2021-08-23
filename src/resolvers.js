import { posts, users, comments } from './data/data';

export const resolvers = {
  Query: {
    users(parent, args, context, info) {
      if (!args.query) return users;
      return users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()));
    },
    posts(parent, args) {
      if (!args.query) {
        return posts;
      }
      return posts.filter((post) => {
        const isTitle = post.title.toLowerCase().includes(args.query.toLowerCase());
        const isBody = post.body.toLowerCase().includes(args.query.toLowerCase());
        return isTitle || isBody;
      });
    },
    comments(parent, args) {
      if (!args.query) return comments;
      return comments.filter((comment) =>
        comment.textField.toLowerCase().includes(args.query.toLowerCase())
      );
    },
  },
  // Relationship in resolver
  Post: {
    author(parent, args, context, info) {
      return users.find((user) => user.id === parent.author);
    },
  },
  User: {
    posts(parent) {
      return posts.filter((post) => post.author === parent.id);
    },
  },
};
