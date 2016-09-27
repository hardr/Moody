const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const playerController = require('../controllers/player');

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

module.exports = router;
