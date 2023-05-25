import Express from "express";
import { verify } from "./verifyUserTokens.js";
import {
    createMeasurementOrder,
    getNumberOfOrdersForTailor,
    getPaymentInformation,
    updateOrderStatus,
    OrdersForUser,
    createOrder
} from "../controllers/order.js";

const routerOrder = Express.Router();

routerOrder.put("/createMeasurementOrder", verify, createMeasurementOrder);

routerOrder.get("/getOrdersForTailor", verify, getNumberOfOrdersForTailor);
routerOrder.get("/getPaymentInformation", verify, getPaymentInformation);
routerOrder.post("/updateOrderStatus", verify, updateOrderStatus);

routerOrder.get("/getOrders", verify, OrdersForUser);
routerOrder.post("/createOrder", verify, createOrder);


export default routerOrder;