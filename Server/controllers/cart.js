import userCart from "../models/userCart.js";

export const getCart = async (req, res) => {
  if (req.user.id == req.params.id) {
    console.log(req.params.id);
    try {
      const uCart = await userCart
        .findOne({ user: req.params.id });

      res.status(200).json(uCart);
      console.log(uCart);

    } catch (error) {
      res.status(404).json(error);
    }
  } else {
    res.status(403).json("You can only access your Cart!");
  }
};

// add, remove, update
export const updateCart = async (req, res) => {
  if (req.user.id == req.params.id) {
    try {

      const uCart = await userCart.findOneAndUpdate(
        { user: req.params.id },
        {
          $set: req.body
        },
        { new: true }
      );

      res.status(200).json(uCart);
    } catch (error) {
      res.status(404).json(error);
    }
  } else {
    res.status(403).json("You can only access your Cart!");
  }
}

