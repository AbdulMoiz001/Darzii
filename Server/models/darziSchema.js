import mongoose from "mongoose";

const DarziSchema = new mongoose.Schema({
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
//Orders
    measurementOrders: [
        { type: mongoose.Schema.Types.ObjectId, ref: "measurementOrder" }
    ],

    skill:
    {
        type:Number,
        $lt: 11
    },

    address:
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

    },

    updated: {
        type: Date,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

const darziSchema = mongoose.model("darzi", DarziSchema);

export default darziSchema;
