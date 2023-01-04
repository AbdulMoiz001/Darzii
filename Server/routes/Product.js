import Express from "express";
import {
    addNewProduct, getAllProducts, removeProduct,
    getFeaturedProducts, updateProduct
} from "../controllers/Products.js";
import { verify } from "./verifyUserTokens.js";

const routerProduct = Express.Router();

//admin
routerProduct.put('/updateProduct', verify, updateProduct)
routerProduct.post('/addProduct', verify, addNewProduct);
routerProduct.delete('/removeProduct', verify, removeProduct);




//public
routerProduct.get('/featuredProduct', getFeaturedProducts);
routerProduct.get('/', getAllProducts);





export default routerProduct;