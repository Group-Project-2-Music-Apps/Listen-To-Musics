const router = require('express').Router();
const weatherRoute = require('./weather-route');

router.use('/weathers', weatherRoute)

module.exports = router