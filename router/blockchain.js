const express = require('express');
const {
    blockchain
} = require('./../controller/blockchain.js');

const router = express.Router();

router.route('/blockchain').get(blockchain);

module.exports = router;