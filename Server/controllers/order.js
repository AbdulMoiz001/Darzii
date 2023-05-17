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
        const tailorId = req.user.tailorId;
        const orders = await OrderSchema
            .find({ tailorID: tailorId })
            .select(
                'OrderID ClothingType OrderStatus Price CustomerID CustomerContactNumber CustomerName TailorID TailorName TailorContactNumber OrderAcceptanceDate OrderDeliveryDeadline PaymentStatus Rating Catalogue CatalogueID Measurements ClothUI Design'
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

        const paymentInformation = await orderSchema.findOne({ tailorID: tailorId }).select('OrderID ClothingType OrderStatus Price CustomerID CustomerContactNumber CustomerName OrderDeliveryDeadline');

        if (!paymentInformation) {
            return res.status(404).json({ message: 'Payment information not found' });
        }

        res.status(200).json(paymentInformation);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

