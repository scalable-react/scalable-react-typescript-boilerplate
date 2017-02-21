import mongoose, { Types } from 'mongoose';
import path from 'path';
import PostModel from './models/post';
import CommentModel from './models/comment';
import uuid from './utils/uuid';

const postId = uuid();
function seedComments() {
  return [
    {
      author: 'Admin User',
      body: 'This is the first comment!',
      post: postId,
    },
  ];
}

function seedPosts(comments) {
  return [
    {
      id: postId,
      title: 'Welcome!',
      content: 'Hey there!  Welcome to the blog of Scalable-React-TypeScript! ' +
        'This is just an introductory post, but stay tuned for more!',
      image: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/stsb-images/ts-resized-2.png',
      comments,
    },
  ];
}

function createSeedPosts(comments) {
  return new Promise((res, rej) => {
    PostModel.find().exec((err, docs) => {
      if (docs.length === 0) {
        PostModel.create(
          seedPosts(comments),
          (err, data) => {
            if (err) {
              rej(err);
            }
            res(data);
          },
        );
      }
    });
  });
}

function createSeedComments() {
  return new Promise((res, rej) => {
    CommentModel.find().exec((err, docs) => {
      if (docs.length === 0) {
        CommentModel.create(
          seedComments(),
          (err, data) => {
            if (err) {
              rej(err);
            }
            res(data);
          },
        );
      }
    });
  });
}

function createSeedData() {
  return new Promise((res, rej) => {
    createSeedComments().then((comments) => {
      createSeedPosts(comments).then(() => {
        res();
      });
    }).catch((err) => rej(err));
  });
}

const env = require('node-env-file');

env(path.join(process.cwd(), '.env'));

const dbUri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;

mongoose.connect(dbUri);
mongoose.connection.on('connected', () => {
  console.info(`Mongoose connection open to ${dbUri}`);
  createSeedData();
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.info('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});
