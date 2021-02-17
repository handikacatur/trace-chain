const path = require('path')

// @desc    Landing Page
// @route   GET /
// @access  Public
exports.product = async (req, res, next) => {
    res.status(200).sendFile(path.resolve('./produk.html'));
};