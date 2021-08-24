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
  {
    id: '4',
    name: 'Didier',
    email: 'didi@gql.fr',
  },
];

const posts = [
  {
    id: '10',
    title: 'Is this a Post or a post ?',
    body: "that's the question everyone should ask !",
    published: true,
    author: '2',
    comments: ['121', '24'],
  },
  {
    id: '21',
    title: 'Is Trump who created the movement "Black Lives Matter" ?',
    body: 'Conspiracy 2.0 has begun at its most powerful strength, Embrace it',
    published: true,
    author: '3',
    comments: ['18', '33'],
  },
  {
    id: '33',
    title: "What's the meaning of life ?",
    body: 'Hello World!, You gonna find the answer with a console.log(42)',
    published: false,
    author: '1',
    comments: [],
  },
  {
    id: '28',
    title: 'Mom, did you saw my keys ?',
    body: 'do not anwer tho !',
    published: false,
    author: '4',
    comments: [],
  },
];

const comments = [
  {
    id: '18',
    textField: 'Agreed !',
    author: '3',
    post: '33',
  },
  {
    id: '24',
    textField: "That's my Girl !",
    author: '1',
    post: '10',
  },
  {
    id: '33',
    textField: 'Make war not peace !',
    author: '2',
    post: '21',
  },
  {
    id: '121',
    textField: "Ask yourself dude, is it a comment, or a Comment ? I would say it's just Spam !",
    author: '1',
    post: '10',
  },
  {
    id: '117',
    textField: 'How does his shit works ?!',
    author: '4',
    post: '28',
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
