const axios = require("axios");

module.exports = (options) => {
  return axios(options)
    .then((res) => {
      return [, res.data];
    })
    .catch((err) => [err]);
};
