var Product = require("../models/product");

// Create a new product
module.exports.createProduct = async (req, res, next) => {
  try {
    let newProd = new Product(req.body);
    let result = await Product.create(newProd);
    console.log(result);
    res.json({
      success: true,
      message: "Item added successfully.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get all products
module.exports.getAllProducts = async (req, res, next) => {
  try {
    let allproducts = await Product.find();
    res.json(allproducts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get a product by ID
module.exports.productByID = async function (req, res, next) {
  try {
    let id = req.params.productID;
    let product = await Product.find(id);
    res.json(product);
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.read = async function (req, res, next) {
  res.json(req.product);
};

// Update a product by ID
module.exports.update = async (req, res, next) => {
  try {
    let productId = req.params.prodID;
    let updatedProduct = Product(req.body);
    updatedProduct._id = productId;

    let result = await Product.updateOne({ _id: productId }, updatedProduct);
    console.log(result);
    if (result.modifiedCount > 0) {
      res.json({
        success: true,
        message: "Product updated successfully.",
      });
    } else {
      // Express will catch this on its own.
      throw new Error("Product not updated. Are you sure it exists?");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Delete a product by ID
module.exports.deleteProduct = async (req, res) => {
  try {
    let productId = req.params.prodID;

    let result = await Product.deleteOne(productId);

    if (result.deletedCount > 0) {
      res.json({
        success: true,
        message: "Product deleted successfully.",
      });
    } else {
      throw new Error("Product not deleted. Are you sure it exists?");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
