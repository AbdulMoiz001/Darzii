import mongoose from "mongoose";

import Appointment from "../models/appointment.js";


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