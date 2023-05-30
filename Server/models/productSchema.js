import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },

  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  numReviews: {
    type: Number,
    default: 0,
  },

  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },

  availability: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
  },


  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("product", ProductSchema);

export default Product;
