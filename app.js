const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user/', user);

module.exports = app;