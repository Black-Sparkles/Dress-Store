const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.productByID);
router.post("/create", productController.createProduct);
router.put("/edit/:id", productController.update);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
