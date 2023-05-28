import Express from "express";
import {
    addNewProduct, getAllProducts, removeProduct,
    getFeaturedProducts, updateProduct, getAllProductsForAdmin, getProduct
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
// routerProduct.get('/', getAllProducts);





export default routerProduct;