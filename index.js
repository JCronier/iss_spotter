const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  
  return ip;
});

fetchCoordsByIp("24.86.76.161", (error, coords) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(coords);
  return coords;
});

const coords = { latitude: 4824, longitude: -123.0399 };

fetchISSFlyOverTimes(coords, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(data);
  return;
});