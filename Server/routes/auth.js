import express from 'express';
import {
    registerRider,
    logInDarzi,
    logInRider,
    LoginUser,
    registerWarehouseUsers,
    registerUser,
    registerDarzi,
    emailExists
} from '../controllers/auth.js';
import { verify } from "./verifyUserTokens.js";


const routerAuth = express.Router();

routerAuth.post('/registerUser', registerUser);
routerAuth.post('/checkEmail', emailExists);

routerAuth.post('/loginUser', LoginUser);

//admin
routerAuth.post('/registerWarehouseUsers', verify, registerWarehouseUsers);
routerAuth.post('/registerRider', verify, registerRider);
routerAuth.post('/registerDarzi', verify, registerDarzi);

//logIn other users {Rider, Darzi}
routerAuth.post('/loginRider', logInRider);
routerAuth.post('/loginDarzi', logInDarzi);





export default routerAuth;