const path = require('path')

// @desc    Landing Page
// @route   GET /
// @access  Public
exports.aboutUs = async (req, res, next) => {
    res.status(200).sendFile(path.resolve('./tentang-kami.html'));
};