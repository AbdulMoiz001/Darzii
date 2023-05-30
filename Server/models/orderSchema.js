import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  OrderType: { type: String, },
  ProductID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  ProductPrice: { type: Number, },
  TailorPrice: { type: Number, },
  ItemTitle: { type: String, },
  TailorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tailor",
  },

  Size: { type: String, default: null },
  address: { type: String, default: null },
  OrderStatus: { type: String, },
  payment_intent: { type: String, default: null },
  Measurements: {
    height: { type: Number, default: null },
    weight: { type: Number, default: null },
    chest: { type: Number, default: null },
    waist: { type: Number, default: null },
    hips: { type: Number, default: null },
    shoulder: { type: Number, default: null },
    sleeves: { type: Number, default: null },
    neck: { type: Number, default: null }
  },
  ClothUI: { type: Boolean, default: false },
  Design: {
    beltStyle: { type: String, default: null },
    cuffsStyle: { type: String, default: null },
    bottomStyle: { type: String, default: null },
    trouserStyle: { type: String, default: null },
    stitchStyle: { type: String, default: null },
    collarStyle: { type: String, default: null },
    sleevesStyle: { type: String, default: null },
    shoulderStyle: { type: String, default: null },
    neckStyle: { type: String, default: null },
    lacingStyle: { type: String, default: null }
  },
  Catalogue: { type: Boolean, default: false },
  CatalogueID: { type: Number, default: null },
  Price: { type: Number, },
  Title: { type: String, },
  ClothingType: { type: String, },
  OrderStatus: { type: String, },
  CustomerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  OrderAcceptanceDate: { type: Date, },
  creationDate: { type: Date, },
  OrderDeliveryDeadline: { type: Date, },
  PaymentStatus: { type: String, },
  Rating: { type: Number, }
});

const OrderSchema = mongoose.model("order", orderSchema);

export default OrderSchema;

