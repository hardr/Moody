const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const playerController = require('../controllers/player');
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  const searchYoutube = playerController.searchYoutube;
  const renderObject = {};
  renderObject.title = 'Acting All Moody';
  searchYoutube('Fuck Apologies')
  .then(function(id) {
    renderObject.song_id = id;
    res.render('index', renderObject);
  });
});


  router.get('/:score', (req, res, next) => {
    const score = req.params.score;
    knex('songs').min('songs.score' - score);
    // knex.raw(select * from songs where min @(songs.score - score))
  });
module.exports = router;
