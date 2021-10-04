const express = require('express');
const urlRoutes = require('./url');

const app = express.Router();

app.use('/url', urlRoutes);

module.exports = app;
