const { response } = require('express');
const urlDto = require('./dto');
const Url = require('./schema');

const createUrl = async (url) => {
  let response = {
    data: null,
    codError: 0,
    msgError: null,
  };

  try {
    const newUrl = new Url(url);
    await newUrl.save();

    response = urlDto.daoResponse(newUrl);
  } catch (error) {
    let errorResponse = null;
    if (error.message.includes('E11000')) {
      response = urlDto.daoResponse(null, 409, 'Alias has to be unique', error);
    } else {
      response = urlDto.daoResponse(null, 500, 'Generic error', error);
    }
  }

  return response;
};

const getUrl = async (alias) => {
  let response = {
    data: null,
    codError: 0,
    msgError: null,
  };

  try {
    const url = await Url.findOne({ alias }).exec();

    if (url === null) throw { code: 404, message: 'Url not found' };

    response = urlDto.daoResponse(url);
  } catch (error) {
    const code = error.code ? error.code : 500;
    response = urlDto.daoResponse(null, code, 'Generic error', error);
  }

  return response;
};

module.exports = {
  createUrl,
  getUrl,
};
