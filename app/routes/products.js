const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

router.get("/products", productController.getAllProducts);
router.get("/products/:prodID", productController.productByID);
router.post("/products", productController.createProduct);
router.put("/products/:prodID", productController.update);
router.delete("/products/:prodID", productController.deleteProduct);

module.exports = router;
