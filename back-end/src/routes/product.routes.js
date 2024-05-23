const express = require("express");
const { getAllProduct } = require("../controllers/product.controller");

const router = express.Router();

router.route("/products").get(getAllProduct);

module.exports = router;
