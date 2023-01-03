import Express from "express";
import { verify } from "./verifyUserTokens.js";
import { addMeasurement, updateMeasurement, getMeasurement } from "../controllers/measurement.js";

const routerMeasurement = Express.Router();

routerMeasurement.put("/addMeasurement/:id", verify, addMeasurement);
routerMeasurement.put("/updateMeasurement/:id", verify, updateMeasurement);
routerMeasurement.get("/getMeasurement/:id", verify, getMeasurement);




export default routerMeasurement