import mongoose from "mongoose";

const measurementSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

  //Incomplete: Needs type of measurements and their attributes
  name: {
    type: String,
    required: true,
  },

  foreArms:
  {
    type: Number,
    default: 0,
  },
  fullArmsLength:
  {
    type: Number,
    default: 0,
  },
  shoulderToShoulder:
  {
    type: Number,
    default: 0,
  },
  chest:
  {
    type: Number,
    default: 0,
  },
  waist:
  {
    type: Number,
    default: 0,
  },
  hips:
  {
    type: Number,
    default: 0,
  },
  shoulderToHip:
  {
    type: Number,
    default: 0,
  },
  thigh:
  {
    type: Number,
    default: 0,
  },
  calf:
  {
    type: Number,
    default: 0,
  },
  hipToFeet:
  {
    type: Number,
    default: 0,
  },
  height:
  {
    type: Number,
    default: 0,
  },

  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const mesauremnets = mongoose.model("measurement", measurementSchema);

export default mesauremnets;
