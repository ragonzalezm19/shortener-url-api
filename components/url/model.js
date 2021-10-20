const userDao = require('./dao');

const createUrl = async (url) => {
  return userDao.createUrl(url);
};

const getUrl = async (alias) => {
  return userDao.getUrl(alias);
};

module.exports = {
  createUrl,
  getUrl,
};
