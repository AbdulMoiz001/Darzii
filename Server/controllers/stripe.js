import Stripe from 'stripe';
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.PAYMENT_SK;
const stripeInstance = Stripe(secretKey);

// Now you can use the `stripeInstance` object to interact with the Stripe API


const calculateOrderAmount = (orders) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client

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
    console.log(calculateOrderAmount(orders));

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}