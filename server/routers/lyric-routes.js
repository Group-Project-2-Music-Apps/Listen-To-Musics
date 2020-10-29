'use strict'

const router = require('express').Router();
const LyricController = require('../controllers/lyricController.js')

router.get('/lyric', LyricController.getLyric);

module.exports = router;