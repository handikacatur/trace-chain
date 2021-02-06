const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static('public'));

const landing = require('./router/landing.js');
const blockchain = require('./router/blockchain.js');
const aboutUs = require('./router/about-us.js');

app.use('/', landing);
app.use('/', blockchain);
app.use('/', aboutUs);

const server = app.listen(8080, console.log('Server is running on port 80...'));