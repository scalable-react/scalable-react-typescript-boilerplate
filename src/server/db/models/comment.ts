import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  author: String,
  body: String,
  post: {
    type: String,
    ref: 'Post',
    required: true,
  },
});

export default mongoose.model('Comment', CommentSchema);
