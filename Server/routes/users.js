import Express from "express";
import {
    GetAll,
    GetAllTailor,
    userDelete,
    userGet,
    userUpdate,
    deleteTailor,
    updatTailor,
} from "../controllers/users.js";
import { verify } from "./verifyUserTokens.js";


const routerUser = Express.Router();

routerUser.put("/userUpdate/:id", verify, userUpdate);
routerUser.delete("/userDelete/:id", verify, userDelete);
routerUser.get("/userGet/:id", verify, userGet);
routerUser.get("/", verify, GetAll);

routerUser.get("/getAllTailors", verify, GetAllTailor);
routerUser.delete("/deleteTailor/:id", verify, deleteTailor);
routerUser.post("/updateTailor/:id", verify, updatTailor);



export default routerUser;