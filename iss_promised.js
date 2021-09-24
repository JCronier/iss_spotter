// iss_promised.js

const request = require("request-promise-native");

const fetchMyIP = function() {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = function(data) {
  const ip = JSON.parse(data).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = function(coords) {
  const { latitude, longitude } = JSON.parse(coords);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(response => {
      return JSON.parse(response).response;
    });
};

module.exports = { nextISSTimesForMyLocation };