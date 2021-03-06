// index.js

// Shows the next 5 flyover times of the International Space Station at your current location

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  passTimes.forEach(time => {
    const date = new Date(time.risetime * 1000);
    console.log(`Next pass at ${date} for ${time.duration} seconds.`);
  });
});