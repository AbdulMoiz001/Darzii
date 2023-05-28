import CryptoJS from "crypto-js";
import userSchema from "../models/userShema.js";
import darziSchema from "../models/darziSchema.js";
import Rider from "../models/riderSchema.js";

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



export const GetAllTailor = async (req, res) => {

  if (req.user["roles"].includes("admin")) {
    try {

      const tailor = await darziSchema.find();
      res.status(200).json(tailor);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  else {
    res.status(403).json("You cannot access this data");
  }

}


export const GetTailors = async (req, res) => {

  try {
    const tailor = await darziSchema.find({}, {
      image: 1,
      tailorName: 1,
      description: 1,
      price: 1,
      lat: 1,
      lng: 1,
      _id: 1
    });
    res.status(200).json(tailor);
  } catch (error) {
    res.status(500).json(error);
  }

}

export const deleteTailor = async (req, res) => {

  if (req.user["roles"].includes("admin")) {

    try {
      const tailorId = req.params.id; // Get the tailor ID from the request parameters

      // Delete the tailor from the database
      await darziSchema.findByIdAndRemove(tailorId);

      res.status(200).json({ message: "Tailor deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while deleting the tailor" });
    }
  }
  else {
    res.status(403).json("You cannot access this data");
  }
};



export const updateTailor = async (req, res) => {
  if (req.user["roles"].includes("admin")) {
    try {
      const tailorId = req.params.id;
      const encryptedPassword = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();

      const updatedTailor = await darziSchema.findByIdAndUpdate(
        tailorId,
        {
          $set: {
            ...req.body,
            password: encryptedPassword,
          },
        },
        { new: true }
      );

      res.status(200).json(updatedTailor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error" });
    }
  } else {
    res.status(403).json("You cannot access this data");
  }
};



export const getRiders = async (req, res) => {

  if (req.user["roles"].includes("admin")) {
    try {

      const tailor = await Rider.find();
      res.status(200).json(tailor);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  else {
    res.status(403).json("You cannot access this data");
  }

}

export const DeleteRider = async (req, res) => {

  if (req.user["roles"].includes("admin")) {

    try {
      const rider = req.params.id; // Get the tailor ID from the request parameters

      // Delete the tailor from the database
      await Rider.findByIdAndRemove(rider);

      res.status(200).json({ message: "Rider deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while deleting the Rider" });
    }
  }
  else {
    res.status(403).json("You cannot access this data");
  }
};

export const updateRider = async (req, res) => {
  if (req.user["roles"].includes("admin")) {
    try {
      const riderId = req.params.id;

      // Encrypt the password using AES encryption
      const encryptedPassword = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();

      // Create an updatedRider object with the updated password
      const updatedRider = await Rider.findByIdAndUpdate(
        riderId,
        {
          $set: {
            ...req.body,
            password: encryptedPassword,
          },
        },
        { new: true }
      );

      res.status(200).json(updatedRider);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error" });
    }
  } else {
    res.status(403).json("You cannot access this data");
  }
};