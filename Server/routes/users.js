import Express from "express";
import { GetAll, userDelete, userGet, userUpdate } from "../controllers/users.js";
import { verify } from "./verifyUserTokens.js";


const routerUser = Express.Router();

routerUser.put("/userUpdate/:id", verify, userUpdate);
routerUser.delete("/userDelete/:id", verify, userDelete);
routerUser.get("/userGet/:id", verify, userGet);
routerUser.get("/", verify, GetAll);

export default routerUser;