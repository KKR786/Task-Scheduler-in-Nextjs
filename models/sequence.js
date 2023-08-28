import { Schema, model, models } from "mongoose";

const sequenceSchema = new Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 },
});

const Sequence = models.Sequence || model("Sequence", sequenceSchema);

export default Sequence;
