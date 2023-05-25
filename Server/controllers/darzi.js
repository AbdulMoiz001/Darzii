import mongoose from "mongoose";

import Appointment from "../models/appointment.js";
import darziSchema from "../models/darziSchema.js";


export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ tailorID: req.user.id });


        res.status(200).json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const updateAppointment = async (req, res) => {

};


export const setPrice = async (req, res) => {
    if (req.user.id == req.params.id) {
        try {
            const updatedTailor = await darziSchema.findByIdAndUpdate(
                req.user.id,
                {

                    $set: req.body,
                },
                { new: true }
            );

            if (!updatedTailor) {
                return res.status(404).json({ message: 'Tailor not found' });
            }
            return res.status(200).json(updatedTailor);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }



};

export const setDescription = async (req, res) => {
    if (req.user.id == req.params.id) {

        try {
            // Find the tailor by id and update the description
            const updatedTailor = await darziSchema.findByIdAndUpdate(
                req.user.id,
                {
                    $set: req.body,
                },
                { new: true }
            );

            if (!updatedTailor) {
                return res.status(404).json({ message: 'Tailor not found' });
            }

            return res.status(200).json(updatedTailor);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

};

export const uploadPic = async (req, res) => {
    if (req.user.id == req.params.id) {
        try {
            const updatedTailor = await darziSchema.findByIdAndUpdate(
                req.user.id,
                {
                    image: req.body.image,
                },
                { new: true }
            );
            if (!updatedTailor) {
                return res.status(404).json({ message: 'Tailor not found' });
            }
            return res.status(200).json(updatedTailor);

        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });

        }
    }

};

