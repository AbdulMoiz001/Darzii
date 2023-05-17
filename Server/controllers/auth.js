import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import userSchemaMsg from "../models/userShema.js";
import darziSchema from "../models/darziSchema.js";
import riderSchema from "../models/riderSchema.js";

import userCart from "../models/userCart.js";

//Register a User
export const registerUser = async (req, res) => {
  const newUser = new userSchemaMsg({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    // username: req.body.username,
    email: req.body.email,
    // area: req.body.area,
    phone: req.body.phone,
    dob: req.body.dob,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);

    createCartOf(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createCartOf = async (user) => {
  try {
    const newUserCart = new userCart({
      user: user._id,
    });

    await newUserCart.save();
  } catch (error) {
    console.log(error);
  }
};

//create Other user {"Warehouse"}
export const registerWarehouseUsers = async (req, res) => {
  if (req.user.roles.includes("admin")) {
    const newUser = new userSchemaMsg({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      cnic: req.body.cnic,
      dob: req.body.dob,

      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
      roles: ["warehouse"],
    });
    try {
      const user = await newUser.save();
      res.status(201).json(user);
      createCartOf(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};

//LogIn
export const LoginUser = async (req, res) => {
  try {
    //find using email
    const user = await userSchemaMsg.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).json("Wrong password or username!");
      return;
    }
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (originalPassword != req.body.password) {
      res.status(401).json("Wrong password or username!" + req.body.password);
    } else {
      const accessToken = jwt.sign(
        {
          id: user._id,
          roles: user.roles,
        },
        process.env.SECRET_KEY,
        { expiresIn: "2d" }
      );

      const { password, ...info } = user._doc;
      res.status(200).json({ ...info, accessToken });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//check if email exists;
export const emailExists = async (req, res) => {
  try {
    const user = await userSchemaMsg.findOne({ email: req.body.email });

    if (!user) {
      res.status(400).json("exists: true");
    }
    else {
      res.status(401).json("exists: false");
    }

  } catch (error) {
    res.status(500).json(error);
  }
}


export const registerDarzi = async (req, res) => {
  if (req.user.roles.includes("admin")) {
    const newUser = new darziSchema({
      tailorId: req.body.tailorId,
      userName: req.body.userName,
      tailorName: req.body.tailorName,
      phone: req.body.phone,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
      cnic: req.body.cnic,
      address: req.body.address,
      skill: req.body.skill,
    });
    try {
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};

export const registerRider = async (req, res) => {
  if (req.user.roles.includes("admin")) {
    const newUser = new riderSchema({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
      cnic: req.body.cnic,
      vehicleModel: req.body.vehicleModel,
      vehicleMake: req.body.vehicleMake,
      vehicleReg: req.body.vehicleReg,

      phone: req.body.phone,
    });
    try {
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};

export const logInRider = async (req, res) => {
  try {
    //find using email
    const user = await riderSchema.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json("Wrong password or username!");
      return;
    }
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (originalPassword != req.body.password) {
      res.status(401).json("Wrong password or username!" + req.body.password);
    } else {
      const accessToken = jwt.sign(
        {
          id: user._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: "2d" }
      );

      const { password, ...info } = user._doc;
      res.status(200).json({ ...info, accessToken });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const logInDarzi = async (req, res) => {
  try {
    //find using email
    const user = await darziSchema.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json("Wrong password or username!");
      return;
    }
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (originalPassword != req.body.password) {
      res.status(401).json("Wrong password or username!" + req.body.password);
    } else {
      const accessToken = jwt.sign(
        {
          id: user._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: "2d" }
      );

      const { password, ...info } = user._doc;
      res.status(200).json({ ...info, accessToken });
      console.log(info)
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
