import mongoose from "mongoose";

const DarziSchema = new mongoose.Schema({
    image: {
        type: String,
        default: "",
    },
    userName:
    {
        type: String,
        required: true,
    },
    tailorName:
    {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
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
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    cnic: {
        type: String,
        required: true,
    },
    //Orders
    measurementOrders: [
        { type: mongoose.Schema.Types.ObjectId, ref: "measurementOrder" }
    ],


    lat:
    {
        type: String,
    },
    lng:
    {
        type: String,
    },


    skill:
    {
        type: String,
    },

    address:
    {
        type: String,
    },
    price:
    {
        type: String,
    },
    description:
    {
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

const darziSchema = mongoose.model("tailor", DarziSchema);

export default darziSchema;
