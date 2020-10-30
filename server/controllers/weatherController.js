const axios = require('axios');


class WeatherController {
    static getWeatherData(req,res,next) {
        axios.get('https://ipinfo.io/', {
            params: {
                apikey: process.env.LOCATIONID
            }
        })
        .then(function(response) {
            const city = response.data.city;
            
            return axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: city,
                    appid: process.env.APPID
                }
            })
        })
        .then(function (response) {
            let weatherData = response.data
            res.status(200).json({weatherData})
        })
        .catch(function(err) {
            next(err)
        })
    }
}

module.exports = WeatherController;