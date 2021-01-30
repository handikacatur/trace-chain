const path = require('path')
const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static('public'));

const landing = require('./landing-route.js');

app.use('/', landing);

const server = app.listen(80, console.log('Server is running on port 80...'));