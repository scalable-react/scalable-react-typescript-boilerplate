import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  author: String,
  body: String,
  post: {
    type: String,
    ref: 'Post',
  },
});

export default mongoose.model('Comment', CommentSchema);
