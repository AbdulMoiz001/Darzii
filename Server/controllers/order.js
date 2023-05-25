import mesauremnetOrders from "../models/measurementOrderSchema.js";
import mesauremnets from "../models/meaurementSchema.js";
import OrderSchema from "../models/orderSchema.js";
import mongoose from "mongoose";

export const createMeasurementOrder = async (req, res) => {
    if (req.user.id == req.params.id) {
        const userMesaurement = mesauremnets.findOne({ _id: req.body.Mid });

        if (userMesaurement.user == req.params.id) {
            const newMeasurementOrder = new mesauremnetOrders({
                userMesaurement,
            });

            try {
                const mesauremnetOrder = await newMeasurementOrder.save();
                res.status(201).json(mesauremnetOrder);
            } catch (error) {
                res.status(500).json(error);
            }
        }
    }
    else {
        res.status(403).json("You are not allowed");
    }
}


export const createOrder = async (req, res) => {

    console.log(req.body);

    if (req.body.CustomerID == req.user.id) {

        const newOrder = new OrderSchema({
            CustomerID: req.body.CustomerID,
            Design: req.body.Design,
            Measurements: req.body.Measurements,
            address: req.body.address,
            creationDate: req.body.creationDate,
            payment_intent: req.body.payment_intent,
            Price: req.body.price,
            TailorID: req.body.tailorID,
        });
        try {
            const order = await newOrder.save();

            res.status(200).json(order);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("Anautherized");

    }

}

export const getNumberOfOrdersForTailor = async (req, res) => {

    if (req.user.id) {
        try {
            const tailorId = mongoose.Types.ObjectId(req.user.id)
            const orders = await OrderSchema.find({ TailorID: tailorId })
                .populate("TailorID", "tailorName phone")
                .populate("CustomerID", "firstName lastName phone")
                .select("_id Measurements TailorID ClothUI Design Catalogue CatalogueID Price CustomerID OrderAcceptanceDate OrderDeliveryDeadline PaymentStatus Rating OrderStatus ClothingType")
            // console.log(orders);
            res.status(200).json(orders);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
    else {

        res.status(401).json(error + "Your are not Allowed to Access");
    }
};


export const OrdersForUser = async (req, res) => {

    if (req.user.id) {
        try {
            const userId = mongoose.Types.ObjectId(req.user.id)
            // const tailorId = new ObjectId(req.user.id);
            const orders = await OrderSchema.find({ CustomerID: userId })
                .populate("TailorID", "tailorName phone")
                .select("_id Measurements TailorID ClothUI Design Catalogue CatalogueID Price  OrderAcceptanceDate OrderDeliveryDeadline PaymentStatus OrderStatus ClothingType OrderType ItemTitle Rating")
            // console.log(orders);
            res.status(200).json(orders);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
    else {

        res.status(401).json(error + "Your are not Allowed to Access");
    }
};


export const getPaymentInformation = async (req, res) => {
    try {
        const tailorId = req.params.tailorId;

        const paymentInformation = await OrderSchema.findOne({ tailorID: tailorId }).select('OrderID ClothingType OrderStatus Price CustomerID CustomerContactNumber CustomerName OrderDeliveryDeadline');

        if (!paymentInformation) {
            return res.status(404).json({ message: 'Payment information not found' });
        }

        res.status(200).json(paymentInformation);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};


export const updateOrderStatus = async (req, res) => {

    try {
        const order = await OrderSchema.findById(req.body.id);
        if (order.TailorID === req.user.id) {

            const updatedOrder = await OrderSchema.findOneAndUpdate(
                { _id: req.body.id },
                { $set: { OrderStatus: 'Received' } },
                { new: true }
            );
            res.status(200).json("order update to recieved " + updatedOrder._id);
        }
        else {

            res.status(403).json("You are not allowed");
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }

}