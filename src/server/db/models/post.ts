import mongoose from 'mongoose';

const TagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const PostSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
  },
  tags: [TagSchema],
});

export default mongoose.model('Post', PostSchema);