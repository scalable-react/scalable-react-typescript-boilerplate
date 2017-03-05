export default {
  post: {
    id: '58a0ccb112b4c56440f5d6a7',
    title: 'Welcome!',
    image: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/stsb-images/ts-resized-2.png',
    content: 'Hey there!  Welcome to the blog of Scalable-React-TypeScript! '
      + 'This is just an introductory post, but stay tuned for more!',
    comments: [
      {
        body: 'This is the first comment!',
        author: 'Admin User',
      },
    ],
  },
  error: { message: 'oops' },
  input: 'foo',
  loading: false,
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  onKeyUp: jest.fn(),
};
