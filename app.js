require('./config');

const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const notfound = require('./middleware/404');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.use(notfound);

module.exports = app;
