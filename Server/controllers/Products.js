import ProductSchema from "../models/productSchema.js";

//Add New Product
export const addNewProduct = async (req, res) => {
  if (req.user.roles.includes("admin")) {
    const newProduct = new ProductSchema({
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      price: req.body.price,
      countInStock: req.body.quantity,
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
  if (req.user.roles.includes("admin")) {
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
  if (req.user.roles.includes("admin")) {
    const product_id = req.params.id;
    try {
      const updatedProd = await ProductSchema.findByIdAndUpdate(
        product_id,
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

export const getProducts = async (req, res) => {
  try {
    const products = await ProductSchema.find();

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


export const getAllProductsForAdmin = async (req, res) => {
  try {
    const products = await ProductSchema.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProduct = async (req, res) => {
  const product_id = req.params.id;
  try {
    const products = await ProductSchema.findById(product_id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};