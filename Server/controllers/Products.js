import ProductSchema from "../models/productSchema.js";

//Add New Product
export const addNewProduct = async (req, res) => {
  if (req.user.roles.includes("admin") || req.user.roles.includes("warehouse")) {
    const newProduct = new ProductSchema({
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      price: req.body.price,
      countInStock: req.body.countInStock,
      featured: req.body.featured || false,
    });
    try {
      const product = await newProduct.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};

//Update
export const productUpdate = async (req, res) => {
  if (req.user["roles"].includes("admin")) {
    try {
      const updateProduct = await ProductSchema.findByIdAndUpdate(
        req.params.id, //id to be found
        {
          $set: req.body, //data to be updated
        },
        { new: true } // To return updated data
      );
      res.status(200).json(updateProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can only update your account");
  }
};

//Delete a product
export const removeProduct = async (req, res) => {
  if (req.user.roles.includes("admin") || req.user.roles.includes("warehouse")) {
    try {
      await ProductSchema.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};

//Update Product
export const updateProduct = async (req, res) => {
  if (req.user.roles.includes("admin") ||  req.user.roles.includes("warehouse")) {
    const query = req.query.pid;
    console.log(query);

    try {
      const updatedProd= await ProductSchema.findByIdAndUpdate(
        query,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProd);
    } catch (error) {      
      res.status(500).json(error);
    }
  }
};

export const getAllProducts = async (req, res) => {
  const query = req.query.new;
  try {
    const products = query
      ? await ProductSchema.find().limit(10)
      : await ProductSchema.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await ProductSchema.find({ featured: true }).limit(10);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};
