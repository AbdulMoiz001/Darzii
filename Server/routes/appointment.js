import express from 'express';
import { verify } from "./verifyUserTokens.js";
import {
    getAppointments,
    updateAppointment
} from '../controllers/appointment.js';

const routerAppointment = express.Router();

routerAppointment.get("/getAppointments", verify, getAppointments);
routerAppointment.post("/updateAppointment", verify, updateAppointment);



export default routerAppointment;