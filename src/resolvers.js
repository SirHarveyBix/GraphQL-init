// 4 argument possible : query(parent, args, context, info)
const users = [
  {
    id: '1',
    name: 'Guillaume',
    age: 33,
    email: 'gui@gql.fr',
  },
  {
    id: '2',
    name: 'Sarah',
    age: 31,
    email: 'sa@gql.fr',
  },
  {
    id: '3',
    name: 'Richard',
    email: 'ri@gql.fr',
  },
];

const posts = [
  {
    id: '1',
    title: 'Is this a Post or a post ?',
    body: "that's the question everyone should ask !",
    published: true,
  },
  {
    id: '2',
    title: 'is Trump a president that create movement "Black Lives Matter"',
    body: "Conspiracy 2.0 has begun at it's most powerful strength, Embrace it",
    published: false,
  },
  {
    id: '3',
    title: 'What the meaning of life ?',
    body: 'Hello World!, You gonna find the answer with a console.log(42)',
    published: true,
  },
];

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
