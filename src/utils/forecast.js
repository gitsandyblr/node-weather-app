const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/eb3afaae669328ec73ac9c278b0920d1/" +
    longitude +
    "," +
    latitude +
    "?units=si";

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("unable to connect to forecast services", undefined);
    } else if (body.error) {
      callback(
        "unable to give forecast for co-ordinates, try another search",
        undefined
      );
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          "It is currently " +
          body.currently.temperature +
          " out there with " + body.currently.precipProbability + "% of rain." +
          "Temperature can go upto " +  body.daily.data[0].temperatureHigh + " and come down to " + body.daily.data[0].temperatureLow

      );
    }
  });
};

module.exports = forecast;
