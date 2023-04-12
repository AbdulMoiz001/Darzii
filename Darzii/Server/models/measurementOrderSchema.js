import mongoose from "mongoose";

const measurementOrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },

    amount: { type: Number, default: 1 },
    price: { type: Number, required: true },
    refernceClothes: { type: Boolean, required: true, default: false },
    mesaurement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "measurement",
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],

      //Incomplete: Needs type of measurements and their attributes
      name: {
        type: String,
        required: true,
      },
      fullArmsLength:
      {
        type:Number,
        default:0,
      },
      shoulderToShoulder:
      {
        type: Number,
        default:0,
      },
      chest:
      {
        type: Number,
        default:0,
      },
      waist:
      {
        type: Number,
        default:0,
      },
      hips:
      {
        type: Number,
        default:0,
      },
      shoulderToHip:
      {
        type: Number,
        default:0,
      },
      Thigh:
      {
        type: Number,
        default:0,
      },
      calf:
      {
        type: Number,
        default:0,
      },
      hipToFeet:
      {
        type: Number,
        default:0,
      },
      height:
      {
        type: Number,
        default:0,
      },
      

    status: {
        type: String,
        default: 'Not processed',
        enum: [
          'Not processed',
          'Processing',
          'Shipped to Darzi',
          'Delivered to Darzi',
          'Cutting',
          'Stiching',
          'Shipped',
          'Delivered',
          'Cancelled',
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

const mesaurementOrders = mongoose.model(
    "measurementOrder",
    measurementOrderSchema
);

export default mesaurementOrders;
