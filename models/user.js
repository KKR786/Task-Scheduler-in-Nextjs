import { Schema, model, models } from 'mongoose';
import Sequence from './sequence';

const userSchema = new Schema({
  _id: { 
    type: Number,
   },
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

userSchema.pre('save', async function (next) {
  if (this.isNew) {
    try {
      const sequenceDoc = await Sequence.findByIdAndUpdate(
        'userId',
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
      ).exec();

      this._id = sequenceDoc.sequence_value;
    } catch (err) {
      return next(err);
    }
  }

  next();
});

const User = models.User || model("User", userSchema);

export default User;