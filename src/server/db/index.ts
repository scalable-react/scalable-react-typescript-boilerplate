import mongoose from 'mongoose';
import path from 'path';
import PostModel from './models/post';
import uuid from './utils/uuid';

function seedPosts() {
  return [
    {
      id: uuid(),
      title: 'Test Post',
      content: 'This is a test of the blog posting functionality',
      image: 'https://raw.githubusercontent.com/RyanCCollins/cdn/master/stsb-images/ts-resized-2.png',
    },
  ];
}

function createSeedData() {
  return new Promise((res, rej) => {
    PostModel.find().exec((err, docs) => {
      if (docs.length === 0) {
        PostModel.create(
          seedPosts(),
          (err, data) => {
            if (err) {
              rej(err);
            }
            res(`Created posts ${JSON.stringify(data, null, 2)}`);
          },
        );
      }
    });
  });
}

const env = require('node-env-file');

env(path.join(process.cwd(), '.env'));

const dbUri = `mongodb://localhost:27017/${process.env.DB}`;
const options = {
  user: process.env.DB_USER,
  pass: process.env.DB_PW,
};

mongoose.connect(dbUri, options);
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
