const router = require('express').Router();
const UserController = require('../controllers/UserController');
const authentication = require('../middlewares/authentication');
const SongRoute = require('./SongRoute');
const WeatherRoutes = require('./WeatherRoute');


router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/googleLogin', UserController.googleLogin);
router.use(authentication);

router.use('/songs',SongRoute);
router.use('/weathers',WeatherRoutes);

module.exports = route;
