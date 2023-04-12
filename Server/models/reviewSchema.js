import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
  name: { type: String },
  comment: { type: String },
  rating: { type: Number, $lt: 6 },
});

const review = mongoose.model("review", reviewSchema);

export default review;
