const express = require('express');

const app = express.Router();

app.get('/', (req, res) => {
  res.send('Testing url path');
});

module.exports = app;
