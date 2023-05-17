import mongoose from "mongoose";
import mesauremnetOrders from "../models/measurementOrderSchema.js";
import mesauremnets from "../models/meaurementSchema.js";
import OrderSchema from "../models/orderSchema.js";
import { totalmem } from "os";

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










export const getNumberOfOrdersForTailor = async (req, res) => {
    try {
        const tailorId = req.user.id;
        const orders = await OrderSchema
            .find({ TailorID: tailorId })
            .select(
                'OrderID ClothingType OrderStatus Price CustomerID CustomerContactNumber CustomerName TailorName TailorContactNumber OrderAcceptanceDate OrderDeliveryDeadline PaymentStatus Rating Catalogue CatalogueID Measurements ClothUI Design'
            );

        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
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
        console.log(order.TailorID, req.user.id);
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