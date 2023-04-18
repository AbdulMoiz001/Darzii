import Express from "express";
import { verify } from "./verifyUserTokens.js";
import { getCart, updateCart } from "../controllers/cart.js";

const routerCart = Express.Router();

routerCart.get("/getCart/:id", verify, getCart);
routerCart.put("/updateCart/:id", verify, updateCart);

export default routerCart;
