const express = require('express');
const {
    product
} = require('./../controller/product.js');

const router = express.Router();

router.route('/product').get(product);

module.exports = router;