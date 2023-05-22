import Stripe from 'stripe';
// import { createTestKey } from 'stripe';
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.PAYMENT_SK;
const stripeInstance = Stripe(secretKey);
const calculateOrderAmount = (orders) => {

    return orders.reduce((total, order) => total + order.price, 0) * 100;
};

export const stripePayment = async (req, res) => {
    const { orders } = req.body;
    console.log(req.body);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripeInstance.paymentIntents.create({
        amount: calculateOrderAmount(orders),
        currency: "pkr",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
};
