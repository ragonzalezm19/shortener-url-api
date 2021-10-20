const userDao = require('./dao');

const createUrl = async (url) => {
  return userDao.createUrl(url);
};

module.exports = { createUrl };
