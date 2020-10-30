const route = require('express').Router();

const SongController = require('../controllers/SongController');
const authentication = require('../middlewares/authentication');
const axios = require('axios')

route.use(authentication);
route.get('/',SongController.findAll);
route.post('/',SongController.create);
route.delete('/:id',SongController.delete);



route.get('/search/:track', (req, res, next) => {
    const { track } = req.params
    axios({
        method: 'GET',
        headers: {Authorization : 'Bearer BQDIB-6NPPoO5nHrGuSftZGlSroSaRjMFyYeSVleKospCcbx3ld0O5jIvQiz084YRPdu3Eq0GwBcZkLf4G1bei-n0VjcJdSDyiB6_sqeqDbgf2SiWup5oWN3bDzhBG30wbZmjU_4jVmsA4amtfqHME-P9q3rVaawmijv15Rmb3BQKYY'} ,
        url: `https://api.spotify.com/v1/search?q=${track}&type=track&market=ID`
    })
     .then(response => {
         const musicData = response.data.tracks.items[0];
         res.status(200).json({
             musicData
         })
     })
     .catch(err => next(err))
})

route.get('/:artist/:songname', (req, res, next) => {
    const { artist, songname } = req.params
    axios({
        method: 'GET',
        url: `https://api.lyrics.ovh/v1/${artist}/${songname}`
    })
     .then(response => {
         const lyrics = response.data
         res.status(200).json({
             lyrics
         })
     })
     .catch(err => next(err))
})




module.exports = route;