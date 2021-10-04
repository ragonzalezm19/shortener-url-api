require('./config');

const express = require('express');
const routes = require('./routes');
const notfound = require('./middleware/404');

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use(notfound);

module.exports = app;
