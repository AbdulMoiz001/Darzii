import {stripePayment} from '../controllers/stripe.js'
import express from 'express';
import { verify } from './verifyUserTokens.js';

const routerPayment = express.Router();

routerPayment.post("/create-payment-intent", stripePayment);

export default routerPayment;