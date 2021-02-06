const express = require('express');
const {
    aboutUs
} = require('./../controller/about-us.js');

const router = express.Router();

router.route('/tentang-kami').get(aboutUs);

module.exports = router;