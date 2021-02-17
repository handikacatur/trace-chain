const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static('public'));

const landing = require('./router/landing.js');
const blockchain = require('./router/blockchain.js');
const aboutUs = require('./router/about-us.js');
const product = require('./router/product.js');

app.use('/', landing);
app.use('/', blockchain);
app.use('/', aboutUs);
app.use('/', product);
app.use((req, res, next) => {
    res.sendFile(path.resolve('./404.html'));
});

const server = app.listen(80, console.log('Server is running on port 80...'));