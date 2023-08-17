import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, trim: true }
}, { timestamps: true });

let UserModel;

if (!mongoose.models.UserModel) {
  // If the model doesn't exist, define and compile it
  UserModel = mongoose.model("UserModel", userSchema);
} else {
  // If the model already exists, use the existing model
  UserModel = mongoose.models.UserModel;
}

export default UserModel;
