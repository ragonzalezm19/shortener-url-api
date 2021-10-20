const single = (resource, authUser) => ({
  id: resource._id,
  alias: resource.alias,
  url: resource.url,
});

const daoResponse = (
  data,
  codError = 0,
  msgError = null,
  errorObject = null
) => {
  if (codError === 0) {
    return {
      data,
      codError,
      msgError,
    };
  } else {
    let errorResponse = {
      data,
      codError,
      msgError: null,
    };

    errorResponse.msgError =
      process.env.NODE_ENV === 'production' ? msgError : errorObject.message;

    return errorResponse;
  }
};

const apiResponse = (data, code = 0, message = '') => {
  if (code > 0) {
    return {
      responseStatus: {
        code,
        message,
      },
    };
  } else {
    return {
      data: single(data),
      responseStatus: {
        code,
        message,
      },
    };
  }
};

module.exports = {
  single,
  apiResponse,
  daoResponse,
};
