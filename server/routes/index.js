const route = require('express').Router();
const UserController = require('../controllers/UserController');
const authentication = require('../middlewares/authentication');
const SongRoute = require('./SongRoute');
const WeatherRoutes = require('./WeatherRoute');

router.use(authentication);
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/googleLogin', UserController.googleLogin);

route.use('/songs',SongRoute);
route.use('/weathers',WeatherRoutes);

module.exports = route;
