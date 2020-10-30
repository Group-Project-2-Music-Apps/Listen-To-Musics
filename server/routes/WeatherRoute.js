const route = require('express').Router();
const WeatherController = require('../controllers/weatherController');
const authentication = require('../middlewares/authentication');

route.use(authentication);
route.get('/', WeatherController.getWeatherData);

module.exports = route