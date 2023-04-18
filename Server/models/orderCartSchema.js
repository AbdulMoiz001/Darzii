import mongoose from "mongoose";

const OrderCartSchema = new mongoose.Schema({
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  quantity: Number,
  totalPrice: {
    type: Number,
    default: 0,
  },
  priceWithTax: {
    type: Number,
    default: 0,
  },
  totalTax: {
    type: Number,
    default: 0,
  },

  status: {
    type: String,
    default: 'Not processed',
    enum: [
      'Not processed',
      'Processing',
      'Shipped',
      'Delivered',
      'Cancelled',
    ], 
  },
});

const OrderCart = mongoose.model("orderCart", OrderCartSchema);

export default OrderCart;
