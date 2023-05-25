import Stripe from 'stripe';
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.PAYMENT_SK;
const stripeInstance = Stripe(secretKey);

// Now you can use the `stripeInstance` object to interact with the Stripe API


const calculateOrderAmount = (orders) => {

    return orders.reduce((total, order) => total + order.price, 0) * 100;
};

export const stripePayment = async (req, res) => {
    const { orders } = req.body;
    // Create a PaymentIntent with the order amount and currency
    if (orders.length > 0) {
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
    } else {
        res.status(400).json("No orders found")
    }
};
