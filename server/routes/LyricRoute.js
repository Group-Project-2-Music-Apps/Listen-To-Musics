'use strict'
const route = require('express').Router();
const LyricController = require('../controllers/lyricController.js')
const authentication = require('../middlewares/authentication');

route.use(authentication);
route.get('/', LyricController.getLyric);

module.exports = route;