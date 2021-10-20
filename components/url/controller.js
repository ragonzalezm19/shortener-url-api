const mongoose = require('mongoose');
const Url = require('./schema');
const urlModel = require('./model');
const urlDto = require('./dto');
const { nanoid } = require('nanoid/async');

const createUrl = async (req, res) => {
  if (!req.body.url) return res.status(400).json({ error: 'url is required' });

  const alias = req.body.alias ? req.body.alias : await nanoid();

  const response = await urlModel.createUrl({
    alias: alias,
    url: req.body.url,
  });

  if (response.responseStatus.code === 0) {
    return res.send(urlDto.single(response.data, null));
  } else {
    return res
      .status(response.responseStatus.code)
      .send({ message: response.responseStatus.message });
  }
};

module.exports = {
  createUrl,
};
