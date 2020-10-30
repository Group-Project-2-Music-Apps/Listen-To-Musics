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
        headers: {Authorization : 'Bearer BQCS5Cy3bvobeyv69by0jDgCFOWKmt6hrCRWt0rtheizR9RR58GxyCSlJSgPgYU5TzJouPlQBkHovBZCuHCbHEZZB-MpmW-VSZEe_a91ksNjoWwWEbHLwS8I5kXqWbxCkGhGgsbQqHINjoFpCkbH8ZUb1CmS8_PhB-Cx0o_3O4R0q4s"'} ,
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