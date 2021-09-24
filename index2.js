// index2.js

// Shows the next 5 flyover times of the International Space Station
//  at your current location, but with promises.

const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then(times => {
    times.forEach(time => {
      const date = new Date(time.risetime * 1000);
      console.log(`Next pass at ${date} for ${time.duration} seconds.`);
    });
  })
  .catch(error => {
    console.log("It didn't work: ", error.message);
  });
