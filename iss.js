const request = require("request");

const url = "https://api.ipify.org?format=json";

const fetchMyIP = function(callback) {
  request(url, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
    return;
  });
};

module.exports = { fetchMyIP };