import mongoose from "mongoose";

const RiderSchema = new mongoose.Schema({
    image: {
        type: String,
        default: "",
    },
    username: {
        type: String,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
    CNIC: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
    },

    measurementOrders:[
        {type: mongoose.Schema.Types.ObjectId, ref:"measurementOrder"}
    ],

    productOrders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"orderCart",
        }
    ],

    orders:
    [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"order",
        }
    ],

    vehicle: {
        type: String,
        enum: ["bike", "car", "van"],
        required: true,
        default: "bike",
    },
    numberPlate: {
        type: String,
        required: true,
    },
    updated: {
        type: Date,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

const riderSchema = mongoose.model("rider", RiderSchema);

export default riderSchema;
