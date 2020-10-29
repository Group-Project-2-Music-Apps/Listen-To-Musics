'use strict'

const axios = require('axios');

class LyricController{
  static async getLyric(req, res){
    const { singer, song } = req.body
    try {
      const response = await axios.get(`https://api.lyrics.ovh/v1/${singer}/${song}`);
      // console.log(response);
      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = LyricController;