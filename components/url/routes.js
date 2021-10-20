const express = require('express');
const { createUrl } = require('./controller');

const app = express.Router();

app.post('/', createUrl);

module.exports = app;
