'use strict'

const express = require('express');
const app = express();
const port = 3000;
const lyricRouter = require('./routers/lyric-routes.js');

app.use(express.urlencoded({ extended: true }))

app.use(lyricRouter);

app.listen(port, ()=> console.log(`listening to http://localhost:${port}`));