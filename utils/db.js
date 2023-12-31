import mongoose from "mongoose";

const connect = async () => {
  try {
    const uri = process.env.MONGODB_URL;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error:", error);
    throw new Error("Connection Failed");
  }
};

export default connect;
