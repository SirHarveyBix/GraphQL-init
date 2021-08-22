import { posts, users } from './data/data';
// 4 argument possible : query(parent, args, context, info)

export const resolvers = {
  Query: {
    users(parent, args, context, info) {
      if (!args.query) return users;
      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args) {
      if (!args.query) return posts;
      return posts.filter((post) => {
        const isTitle = post.title.toLowerCase().includes(args.query.toLowerCase());
        const isBody = post.body.toLowerCase().includes(args.query.toLowerCase());
        return isTitle || isBody;
      });
    },
    me() {
      return {
        id: ' ABC-123',
        name: 'Guillaume',
        age: 33,
        email: 'gui@gql.fr',
      };
    },
  },
};
