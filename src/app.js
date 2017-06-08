'use strict';

var express = require('express');
var app = express();
var request = require('request');
var baseUrl = "http://api.apixu.com/v1/forecast.json?days=4&key=9a2276b641524642900181433170206&q=";

//get weather info based on requested location
app.get('/weather', function (req, res) {
  var location = req.param('location');
  request(baseUrl + location, function (error, response, body) {
    res.setHeader('Content-Type', 'application/json');
    var _r = JSON.parse(body);
    if (_r && _r.error) {
      res.send(JSON.stringify({
        "error": {
          "message": _r.error.message || 'Unable to get weather'
        }
      }));
    } else if (_r.location) {
      res.send(JSON.stringify(parseWeather(_r)));
    } else {
      res.send(JSON.stringify({
        "error": {
          "message": "Unable to get weather"
        }
      }));
    }
  });
});

app.listen(3000, function () {
  console.log("http server running on port 3000");
});

//parse the response and format the weather result
var parseWeather = function (data) {
  var forcast_days = [];
  for (var i = 0; i < data.forecast.forecastday.length; i++) {
    var _d = data.forecast.forecastday[i];
    forcast_days.push({
      maxtemp_c: _d.day.maxtemp_c,
      maxtemp_f: _d.day.maxtemp_f,
      mintemp_c: _d.day.mintemp_c,
      mintemp_f: _d.day.mintemp_f,
      date: _d.date,
      icon: _d.day.condition.icon
    });
  }
  return {
    current: {
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      wind_kph: data.current.wind_kph,
      wind_mph: data.current.wind_mph,
      wind_dir: data.current.wind_dir,
      icon: data.current.condition.icon
    },
    forecast_days: forcast_days,
    credits: {
      url: "http://www.worldweatheronline.com/",
      text: "World Weather Online",
      title: "Free Weather API"
    }
  };
};