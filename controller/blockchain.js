const path = require('path')

// @desc    Landing Page
// @route   GET /
// @access  Public
exports.blockchain = async (req, res, next) => {
    res.status(200).sendFile(path.resolve('./blockchain.html'));
};