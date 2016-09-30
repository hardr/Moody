const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const playerController = require('../controllers/player');
const isLoggedIn = require('../auth/init').isLoggedIn;
const beatDetector = require('../controllers/bpm-detector');
const bcrypt = require('bcryptjs');
const googleSpeech = require('../controllers/recognize');
const path = require('path');
const knex = require('../db/knex');
const sentiment = require('sentiment');


router.get('/', function (req, res, next) {
  const searchYoutube = playerController.searchYoutube;
  const renderObject = {};
  renderObject.youtube_id = 'hRK7PVJFbS8';
  if (req.session.user) {
    renderObject.message = 'Welcome to Moody, ' + req.session.user.first_name;
    renderObject.loggedIn = true;
  } else {
    renderObject.message = 'Welcome to Moody, Stranger';
    renderObject.loggedIn = false;
  }
  res.render('index', renderObject);
});

//route will return one song within 1 from the string of the analysis text
router.get('/string/:string', (req, res, next) => {
  const searchYoutube = playerController.searchYoutube;
  const renderObject = {};
  const string = req.params.string;
  let score = returnSentimentAverage(string);
  let sentScore = knex.raw(`select * from songs where abs(songs.sentiment_rating - ${score}) < 1 limit 1`)
  .then((results) => {
    req.session.song = {
      song_id: results.rows[0].id,
      youtube_id: results.rows[0].youtube_id
    };
    res.json(results);
  })
  .catch(function(err) {
    res.send(err);
    });
    console.log('route',renderObject);
  // res.json(renderObject);
});

router.post('/getText', function (req, res, next) {
  const googleAudioToText = googleSpeech.main;
  const filePath = req.body.recordingAddress
  // const filePath = path.join(__dirname,"..", "test_audio", "audio.flac");
  googleAudioToText(filePath, function(err, result) {
    if (err) {
      throw err;
    }
    var textJSONResponse = result["results"][0]["alternatives"][0]["transcript"];
    // use textJSONResponse for sentiment analysis below
    res.json(textJSONResponse);
  });
});

function returnSentimentAverage(string) {
  let sentInput = sentiment(string);
  let len = string.split(" ");
  let numOfWords = len.length;
  const adjScore = sentInput.score/numOfWords + 5;
  return adjScore;
};

module.exports = router;
