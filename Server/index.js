import  express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";


import routerAuth from "./routes/auth.js";
import routerUsers from "./routes/users.js";
import routerProduct from "./routes/Product.js";
import routerCart from "./routes/cart.js";
import routerMeasurement from "./routes/measurement.js";
import routerOrder from "./routes/order.js";

const app = express();

dotenv.config();


app.use(bodyParser.json({ limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.use('/auth', routerAuth);
app.use('/user', routerUsers);
app.use('/cart', routerCart);
app.use('/measurment', routerMeasurement);

app.use('/product', routerProduct);


const CONNECTION_URL = process.env.CONNECTION_URL || "mongodb+srv://Darzii:darzii123@cluster0.fwhecap.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useUnifiedTopology: true,})
    .then(()=> app.listen(PORT, ()=> console.log(`Server Running on Port ${PORT}`)))
    .catch((error) => console.log(error.message));


