// import userSchema from "../models/User.js";
import CryptoJS from "crypto-js";
import userSchema from "../models/userShema.js";

//Update
export const userUpdate = async (req, res) => {
  if (req.user.id == req.params.id || req.user["roles"].includes("admin")) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updateUser = await userSchema.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can only update your account");
  }
};

//Delete
export const userDelete = async (req, res) => {
  if (req.user.id == req.params.id || req.user["roles"].includes("admin")) {
    try {
      await userSchema.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can only Delete your account");
  }
};

//Get
export const userGet = async (req, res) => {
  if (req.user.id == req.params.id || req.user["roles"].includes("admin")) {
    try {
      const user = await userSchema.findById(req.params.id);
      const { password, ...info } = user._doc;
      res.status(200).json(info);
    } catch (error) {
      res.status(404).json(error);
    }
  } else {
    res.status(403).json("You can only get your account");
  }
};

//GetAll
export const GetAll = async (req, res) => {
  const query = req.query.new;
  if (req.user["roles"].includes("admin")) {
    try {
      const users = query
        ? await userSchema.find().limit(10)
        : await userSchema.find();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You cannot access this data");
  }
};
//Get User Stats
