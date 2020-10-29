const axios = require('axios');

class WeatherController {
    static findWeatherLocation (req,res) { 
        axios.get('https://api.openweathermap.org/data/2.5/group', {
            params: {
                id: process.env.CITYID,
                appid: `${process.env.APPID}` 
            }
        })
        .then(function (response) {
        console.log(response.data.list);
        res.status(200).json(response.data.list)
        })
        .catch(function (error) {
        const status = error.response.status
        const msg = error.response.statusText
        res.status(status).json({msg:msg})
        })
    }
}

module.exports = WeatherController;