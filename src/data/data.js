export const users = [
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

export const posts = [
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
    body: "Conspiracy 2.0 has begun at it's most powerful strength, Embrace it",
    published: false,
    author: '3',
    comments: ['18', '33'],
  },
  {
    id: '33',
    title: 'What the meaning of life ?',
    body: 'Hello World!, You gonna find the answer with a console.log(42)',
    published: true,
    author: '1',
    comments: [],
  },
];

export const comments = [
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
];
