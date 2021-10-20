const Url = require('./schema');

const createUrl = async (url) => {
  try {
    const newUrl = new Url(url);
    await newUrl.save();
    return {
      data: newUrl,
      responseStatus: {
        code: 0,
        message: 'New url saved',
      },
    };
  } catch (error) {
    let errorResponse = null;
    if (error.message.includes('E11000')) {
      errorResponse = {
        responseStatus: {
          code: 500,
          message: 'Alias has to be unique',
        },
      };
    } else {
    }

    return errorResponse;
  }
};

module.exports = {
  createUrl,
};
