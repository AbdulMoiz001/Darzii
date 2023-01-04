import mongoose from "mongoose";
import mesauremnetOrders from "../models/measurementOrderSchema.js";
import mesauremnets from "../models/meaurementSchema.js";

export const createMeasurementOrder = async (req,res) =>
{
    if(req.user.id == req.params.id)
    {
        const userMesaurement = mesauremnets.findOne({_id: req.body.Mid});

        if(userMesaurement.user == req.params.id)
        {
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