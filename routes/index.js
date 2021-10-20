const express = require('express');
const urlRoutes = require('../components/url/routes');

const app = express.Router();

app.use('/url', urlRoutes);

module.exports = app;
