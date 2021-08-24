const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) return db.users;
    return db.users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()));
  },
  posts(parent, args, { db }) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter((post) => {
      const isTitle = post.title.toLowerCase().includes(args.query.toLowerCase());
      const isBody = post.body.toLowerCase().includes(args.query.toLowerCase());
      return isTitle || isBody;
    });
  },
  comments(parent, args, { db }) {
    if (!args.query) return db.comments;
    return db.comments.filter((comment) => {
      return comment.textField.toLowerCase().includes(args.query.toLowerCase());
    });
  },
};
export { Query as default };
