import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date()
  }

}
  );
  const Blog = mongoose.model('Blog', BlogSchema);
  export default Blog;