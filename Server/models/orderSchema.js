import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orderCart",
  },

  measurements:
    { type: mongoose.Schema.Types.ObjectId, ref: "measurementOrder" },

  deliveryAddress:
  {
    address_name: {
      type: String,
    },
    city: {
      type: String,
    },
    area: { type: String },
    address: {
      type: String,
    },
    required: true,
  },
  paymentAdress:
  {
    address_name: {
      type: String,
    },
    city: {
      type: String,
    },
    area: { type: String },
    address: {
      type: String,
    }
  },

  is_payed:
  {
    type: Boolean,
    required: true,
    default: false,
  },



  status: {
    type: String,
    default: 'Not processed',
    enum: [
      'Not processed',
      'Processing',
      'Shipped',
      'Partial Shipped',
      'Delivered',
      'Partial Delivered',
      'Cancelled',
      'Partial Cancelled',
    ],
  },

  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
const orderSchema = mongoose.model("order", OrderSchema);

export default orderSchema;

