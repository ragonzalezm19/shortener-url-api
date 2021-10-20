const mongoose = require('mongoose');
const Url = require('./schema');
const urlModel = require('./model');
const urlDto = require('./dto');
const { nanoid } = require('nanoid/async');

const createUrl = async (req, res) => {
  if (!req.body.url) return res.status(400).json({ error: 'url is required' });

  const alias = req.body.alias ? req.body.alias.toLowerCase() : await nanoid();

  const response = await urlModel.createUrl({
    alias: alias,
    url: req.body.url,
  });

  switch (response.codError) {
    case 0:
      return res.send(
        urlDto.apiResponse(response.data, 0, 'New short url was created')
      );
    case 409:
      return res
        .status(409)
        .send(urlDto.apiResponse(null, 409, response.msgError));
    case 500:
      return res
        .status(500)
        .send(urlDto.apiResponse(null, 500, response.msgError));
  }
};

const getUrl = async (req, res) => {
  const alias = req.params.alias.toLowerCase();

  const response = await urlModel.getUrl(alias);

  switch (response.codError) {
    case 0:
      return res.send(urlDto.apiResponse(response.data, 0, 'Url founded'));
    case 404:
      return res
        .status(404)
        .send(urlDto.apiResponse(null, 404, response.msgError));
    default:
      return res
        .status(500)
        .send(urlDto.apiResponse(null, 500, response.msgError));
  }
};

module.exports = {
  createUrl,
  getUrl,
};
