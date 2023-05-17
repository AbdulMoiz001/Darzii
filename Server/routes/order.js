import Express from "express";
import { verify } from "./verifyUserTokens.js";
import {
    createMeasurementOrder,
    getNumberOfOrdersForTailor,
    getPaymentInformation,
} from "../controllers/order.js";

const routerOrder = Express.Router();

routerOrder.put("/createMeasurementOrder", verify, createMeasurementOrder);

routerOrder.get("/getOrdersForTailor", verify, getNumberOfOrdersForTailor);
routerOrder.get("/getPaymentInformation", verify, getPaymentInformation);



export default routerOrder;