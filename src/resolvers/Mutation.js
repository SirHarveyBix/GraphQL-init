import { PubSub } from 'graphql-yoga';
import { v4 as uuidv4 } from 'uuid';

const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some((user) => user.email === args.data.email);
    if (emailTaken) throw new Error('Email already taken.');
    const user = {
      id: uuidv4(),
      ...args.data,
    };
    db.users.push(user);
    return user;
  },
  deleteUser(parent, args, { db }, info) {
    const userIndex = db.users.findIndex((user) => user.id === args.id);
    if (userIndex === -1) throw new Error('no User Found.');
    const deletedUsers = db.users.splice(userIndex, 1);
    db.posts = db.posts.filter((post) => {
      const match = post.author === args.id;
      if (match) db.comments = db.comments.filter((comment) => comment.post !== post.id);
      return !match;
    });
    db.comments = db.comments.filter((comment) => comment.author !== args.id);
    return deletedUsers[0];
  },
  updateUser(parent, { id, data }, { db }, info) {
    const user = db.users.find((user) => user.id === id);
    if (!user) throw new Error('no user found !');
    if (typeof data.email === 'string') {
      if (db.users.some((user) => user.email === data.email))
        throw new Error('email already taken');
      user.email = data.email;
    }
    if (typeof data.name === 'string') user.name = data.name;
    if (typeof data.age !== 'undefined') user.age = data.age;
    return user;
  },
  createPost(parent, args, { db, pubsub }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author);
    if (!userExists) throw new Error('User not found !');
    const post = {
      id: uuidv4(),
      ...args.data,
    };
    db.posts.push(post);
    if (post.published) pubsub.publish(`New post`, { post });
    return post;
  },
  deletePost(parent, args, { db }, info) {
    const postIndex = db.posts.findIndex((post) => post.id === args.id);
    if (postIndex === -1) throw new Error('Not such post.');
    const deletedPost = db.posts.splice(postIndex, 1);
    db.comments = db.comments.filter((comment) => comment.post !== args.id);
    return deletedPost[0];
  },
  updatePost(parent, { id, data }, { db }, info) {
    const post = db.posts.find((post) => post.id === id);
    if (!post) throw new Error('no such post !');
    if (typeof data.title === 'string') post.title = data.title;
    if (typeof data.body === 'string') post.body = data.body;
    if (typeof data.published === 'boolean') post.published = data.published;
    return post;
  },
  createComment(parent, args, { db, pubsub }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author);
    const postExists = db.posts.some((post) => post.id === args.data.post && post.published);
    if (!userExists || !postExists)
      throw new Error("You're about to create a comment related to no one, or nothing.");
    const comment = {
      id: uuidv4(),
      ...args.data,
    };
    db.comments.push(comment);
    //push comment to subscription
    pubsub.publish(`comment ${args.data.post}`, { comment });
    return comment;
  },
  deleteComment(parent, args, { db }, info) {
    const commentIndex = db.comments.findIndex((comment) => comment.id === args.id);
    if (commentIndex === -1) throw new Error('Not such comment.');
    const deletedComment = db.comments.splice(commentIndex, 1);
    return deletedComment[0];
  },
  updateComment(parent, { id, data }, { db }, info) {
    const comment = db.comments.find((comment) => comment.id === id);
    if (!comment) throw new Error('no such comment.');
    if (typeof data.textField === 'string') comment.textField = data.textField;
    return comment;
  },
};
export { Mutation as default };
