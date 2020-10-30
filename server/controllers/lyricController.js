'use strict'

const axios = require('axios');

class LyricController{
  static async getLyric(req, res){
    const { artist, title } = req.body
    try {
      const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      res.status(200).json(response.data);
    } catch (err) {
      res.status(404).json({msg: err.message});
    }
  }
}

module.exports = LyricController;