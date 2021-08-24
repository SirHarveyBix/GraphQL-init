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
    console.log(users);
    return user;
  },
  deleteUser(parent, args, { db }) {
    const userIndex = db.users.findIndex((user) => user.id === args.id);
    if (userIndex === -1) throw new Error('no User Found.');
    const deleteUsers = db.users.splice(userIndex, 1);
    db.posts = db.posts.filter((post) => {
      const match = post.authors === args.id;
      if (match) comments = comments.filter((comment) => comment.post !== post.id);
      return !match;
    });
    db.comments = db.comments.filter((comment) => comment.author !== args.id);
    return deleteUsers[0];
  },

  createPost(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author);
    if (!userExists) throw new Error('User not found !');
    const post = {
      id: uuidv4(),
      ...args.data,
    };
    db.posts.push(post);
    return post;
  },

  createComment(parent, args, { db }) {
    const userExists = db.users.some((user) => user.id === args.data.author);
    const postExists = db.posts.some((post) => post.id === args.data.post && post.published);

    if (!userExists || !postExists)
      throw new Error("You're about to create a comment related to no one, or nothing.");

    const comment = {
      id: uuidv4(),
      ...args.data,
    };

    db.comments.push(comment);
    return comment;
  },
};
export { Mutation as default };
