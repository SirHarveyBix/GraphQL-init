const Comment = {
  author(parent, args, { db }) {
    return db.users.find((user) => user.id === parent.author);
  },
  post(parent, args, { db }) {
    return db.posts.filter((post) => post.id === parent.post);
  },
};

export { Comment as default };
