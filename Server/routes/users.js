import Express from "express";
import {
    GetAll,
    GetAllTailor,
    userDelete,
    userGet,
    userUpdate,
    deleteTailor,
    GetTailors,
    getRiders,
    DeleteRider,
    updateRider,
    updateTailor,
    getTailor,
} from "../controllers/users.js";
import { verify } from "./verifyUserTokens.js";


const routerUser = Express.Router();

routerUser.put("/userUpdate/:id", verify, userUpdate);
routerUser.delete("/userDelete/:id", verify, userDelete);
routerUser.get("/userGet/:id", verify, userGet);
routerUser.get("/", verify, GetAll);


//For Admin
routerUser.get("/getAllTailors", verify, GetAllTailor);
routerUser.delete("/deleteTailor/:id", verify, deleteTailor);
routerUser.post("/updateTailor/:id", verify, updateTailor);

routerUser.get("/getRiders", verify, getRiders);
routerUser.delete("/deleteRider/:id", verify, DeleteRider);
routerUser.post("/updateRider/:id", verify, updateRider);

//For user

routerUser.get("/getTailors", verify, GetTailors);
routerUser.get("/getTailor/:id", verify, getTailor);
export default routerUser;