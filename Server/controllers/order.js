import mesauremnetOrders from "../models/measurementOrderSchema.js";
import mesauremnets from "../models/meaurementSchema.js";
import OrderSchema from "../models/orderSchema.js";
import mongoose, { mongo } from "mongoose";

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

    if (req.body.CustomerID == req.user.id) {

        const newOrder = new OrderSchema({
            ItemTitle: req.body.ItemTitle ? req.body.ItemTitle : "Custom Order",
            ProductID: req.body.clothID,
            ProductPrice: req.body.clothPrice,
            CustomerID: req.body.CustomerID,
            TailorID: req.body.tailorID,
            TailorPrice: req.body.tailorPrice,
            Price: req.body.price,
            Design: req.body.Design,
            Measurements: req.body.Measurements,
            address: req.body.address,
            creationDate: new Date(),
            payment_intent: req.body.payment_intent,
            OrderStatus: "Pending",
            PaymentStatus: "Confirmed"
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
                .select("_id Measurements TailorID ClothUI Design Catalogue CatalogueID Price CustomerID OrderAcceptanceDate OrderDeliveryDeadline PaymentStatus Rating OrderStatus ClothingType ItemTitle")
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
        const updatedOrder = req.body.status === "Received" ? await OrderSchema.findOneAndUpdate(
            { _id: req.body.id },
            {
                $set: {
                    OrderStatus: req.body.status,
                    OrderAcceptanceDate: req.body.OrderAcceptanceDate,
                    OrderDeliveryDeadline: req.body.OrderDeliveryDeadline,
                }
            },
            { new: true }
        )
            :

            await OrderSchema.findOneAndUpdate({ _id: req.body.id },
                {
                    $set: {
                        OrderStatus: req.body.status,
                    }
                },
                { new: true });
        res.status(200).json("order update to recieved " + updatedOrder._id);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }

}