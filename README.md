# weather-info

Parse weather details response from free world weather online API.

### Setup
 * install node js
 `https://nodejs.org/en/`
 * Clone this repository
 * cd to `weather-info` folder
 * Run `npm install`
 * Run `npm start`
 
 ### Example Usage
 `<your domain>:3000/weather?location=Denver`
 
 
 ### Example Response
 ```json
{
  "current": {
    "temp_c": 19.4,
    "temp_f": 66.9,
    "wind_kph": 9,
    "wind_mph": 5.6,
    "wind_dir": "WSW",
    "icon": "//cdn.apixu.com/weather/64x64/day/116.png"
  },
  "forecast_days": [
    {
      "maxtemp_c": 28.2,
      "maxtemp_f": 82.8,
      "mintemp_c": 16.2,
      "mintemp_f": 61.2,
      "date": "2017-06-08",
      "icon": "//cdn.apixu.com/weather/64x64/day/113.png"
    },
    {
      "maxtemp_c": 32.2,
      "maxtemp_f": 90,
      "mintemp_c": 17.2,
      "mintemp_f": 63,
      "date": "2017-06-09",
      "icon": "//cdn.apixu.com/weather/64x64/day/113.png"
    },
    {
      "maxtemp_c": 33.2,
      "maxtemp_f": 91.8,
      "mintemp_c": 13.2,
      "mintemp_f": 55.8,
      "date": "2017-06-10",
      "icon": "//cdn.apixu.com/weather/64x64/day/113.png"
    },
    {
      "maxtemp_c": 31.2,
      "maxtemp_f": 88.2,
      "mintemp_c": 12.2,
      "mintemp_f": 54,
      "date": "2017-06-11",
      "icon": "//cdn.apixu.com/weather/64x64/day/119.png"
    }
  ],
  "credits": {
    "url": "http://www.worldweatheronline.com/",
    "text": "World Weather Online",
    "title": "Free Weather API"
  }
}
 ```
