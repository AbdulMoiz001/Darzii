import Express from "express";
import { verify } from "./verifyUserTokens.js";
import { createMeasurementOrder } from "../controllers/order.js";

const routerOrder = Express.Router();

routerOrder.put("/createMeasurementOrder/", verify, createMeasurementOrder);


export default routerOrder;