import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  name: {
    type: String,
    required: [true, 'Name is required!']
  },
  designation: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
  }
}, { timestamps: true });

const User = models.User || model("User", userSchema);

export default User;