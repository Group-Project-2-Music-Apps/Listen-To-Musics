const route = require('express').Router();
const UserController = require('../controllers/UserController');
const authentication = require('../middlewares/authentication');
const SongRoute = require('./SongRoute');
const WeatherRoutes = require('./WeatherRoute');


route.post('/signup', UserController.signup);
route.post('/login', UserController.login);
route.post('/googleLogin', UserController.googleLogin);
route.use(authentication);

route.use('/songs',SongRoute);
route.use('/weathers',WeatherRoutes);

module.exports = route;
