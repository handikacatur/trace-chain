const express = require('express');
const {
    home
} = require('./landing.js');

const router = express.Router();

router.route('/').get(home);

module.exports = router;