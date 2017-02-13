import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
  },
  comments: [{ type: String, ref: 'Comment' }],
});

export default mongoose.model('Post', PostSchema);
