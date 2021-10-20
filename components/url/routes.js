const express = require('express');
const { createUrl, getUrl } = require('./controller');

const app = express.Router();

app.post('/', createUrl);
app.get('/:alias', getUrl);

module.exports = app;
