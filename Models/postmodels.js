import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
  author: { type: String, required: true, unique: true, trim: true },
  image: { type: String, required: true, unique: true },
  title: { type: String, required: true, trim: true },
  Content: { type: String, required: true, trim: true }
}, { timestamps: true });

let PostsModel;

if (!mongoose.models.Posts) {
  // If the model doesn't exist, define and compile it
  PostsModel = mongoose.model("Posts", PostSchema);
} else {
  // If the model already exists, use the existing model
  PostsModel = mongoose.models.Posts;
}

export default PostsModel;
