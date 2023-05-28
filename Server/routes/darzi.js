import express from 'express';
import { verify } from "./verifyUserTokens.js";
import {
    getAppointments,
    setDescription,
    setPrice,
    updateAppointment,
    uploadPic
} from '../controllers/darzi.js';

const routerDarzi = express.Router();

routerDarzi.get("/getAppointments", verify, getAppointments);
routerDarzi.put("/updateAppointment", verify, updateAppointment);



routerDarzi.put("/setPrice/:id", verify, setPrice);
routerDarzi.put("/setDescription/:id", verify, setDescription);
routerDarzi.put("/uploadPic/:id", verify, uploadPic);


export default routerDarzi;