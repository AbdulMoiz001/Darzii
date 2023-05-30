import Express from "express";
import {
    addNewProduct, removeProduct,
    getFeaturedProducts, updateProduct, getAllProductsForAdmin, getProduct, getProducts
} from "../controllers/Products.js";
import { verify } from "./verifyUserTokens.js";

const routerProduct = Express.Router();

//admin
routerProduct.put('/updateProduct/:id', verify, updateProduct)
routerProduct.post('/addProduct', verify, addNewProduct);
routerProduct.delete('/deleteProduct/:id', verify, removeProduct);
routerProduct.get('/allProducts', verify, getAllProductsForAdmin);
routerProduct.get('/getproduct/:id', verify, getProduct);




//public
routerProduct.get('/featuredProduct', getFeaturedProducts);
routerProduct.get('/getProducts', verify, getProducts);





export default routerProduct;