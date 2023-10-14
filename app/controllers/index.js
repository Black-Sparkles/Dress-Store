let Product = require("../models/product");

module.exports.home = function (req, res, next) {
  res.json({
    success: true,
    message: "Welcome to DressStore Application",
  });
};
