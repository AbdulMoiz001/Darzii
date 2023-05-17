import express from 'express';
import { verify } from "./verifyUserTokens.js";
import { getAppointments } from '../controllers/appointment.js';

const routerAppointment = express.Router();

routerAppointment.get("/getAppointments", verify, getAppointments);



export default routerAppointment;