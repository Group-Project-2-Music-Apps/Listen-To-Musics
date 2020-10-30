const route = require('express').Router();
const UserController = require('../controllers/UserController');
const SongRoute = require('./SongRoute');
const WeatherRoute = require('./WeatherRoute');
const LyricRoute = require('./LyricRoute');


route.post('/users/register',UserController.create);
route.post('/users/login',UserController.login);
route.post('/users/googleSign',UserController.googleSign)
route.use('/songs',SongRoute);
route.use('/weathers',WeatherRoute);
route.use('/lyrics', LyricRoute);

module.exports = route;

