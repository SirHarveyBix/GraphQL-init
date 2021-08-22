// 4 argument possible : query(parent, args, context, info)
export const resolvers = {
  Query: {
    greeting(parent, args, context, info) {
      if (args.name) return `Hello ${args.name} ! you're ${args.pos}`;
    },
    add(parents, args, context, info) {
      if (args.numbers.lenght === 0) return 0;
      return args.numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    },
    grades(parents, args, context, info) {
      return [0, 99, 197];
    },
    me() {
      return {
        id: ' ABC-123',
        name: 'Guillaume',
        age: 33,
        email: 'gui@gql.fr',
      };
    },
    post() {
      return {
        id: '123',
        title: 'Is this a Post or a post ?',
        body: "that's the question everyone should ask !",
        published: false,
      };
    },
  },
};
