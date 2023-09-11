import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Database connection failed: ", error.message);
  }
};