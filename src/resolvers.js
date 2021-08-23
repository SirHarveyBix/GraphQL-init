import { v4 as uuidv4 } from 'uuid';
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
      return comments.filter((comment) => {
        return comment.textField.toLowerCase().includes(args.query.toLowerCase());
      });
    },
  },
  Mutation: {
    createUser(parent, args, context, info) {
      const emailTaken = users.some((user) => user.email === args.email);
      if (emailTaken) throw new Error('Email already taken.');
      const user = {
        id: uuidv4(),
        name: args.name,
        email: args.email,
        age: args.age,
      };
      users.push(user);
      console.log(users);
      return user;
    },
    createPost(parent, args, context, info) {
      const userExists = users.some((user) => user.id === args.author);
      if (!userExists) throw new Error('User not found !');
      const post = {
        id: uuidv4(),
        title: args.title,
        body: args.body,
        published: args.published,
        author: args.author,
      };
      posts.push(post);
      return post;
    },
    createComment(parent, args) {
      const userExists = users.some((user) => user.id === args.author);
      const postExists = posts.some((post) => post.id === args.post && post.published);

      if (!userExists || !postExists)
        throw new Error("You're about to create a comment related to no one, or nothing.");

      const comment = {
        id: uuidv4(),
        textField: args.textField,
        author: args.author,
        post: args.post,
      };

      comments.push(comment);
      return comment;
    },
  },
  // Relationship in resolver
  Post: {
    author(parent, args, context, info) {
      return users.find((user) => user.id === parent.author);
    },
    comments(parent, args) {
      return comments.filter((comment) => comment.post === parent.id);
    },
  },
  User: {
    posts(parent) {
      return posts.filter((post) => post.author === parent.id);
    },
    comments(parent, args) {
      return comments.filter((comment) => comment.author === parent.id);
    },
  },
  Comment: {
    author(parent) {
      return users.find((user) => user.id === parent.author);
    },
    post(parent) {
      return posts.filter((post) => post.id === parent.post);
    },
  },
};
