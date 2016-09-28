const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const beatDetector = require('../controllers/bpm-detector');
const bcrypt = require('bcryptjs');
const googleSpeech = require('../controllers/recognize');
const WAV_to_FLAC = require('../controllers/WAV_to_FLAC');
const path = require('path');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Moody';
  renderObject.song_id = 'hRK7PVJFbS8';
  res.render('index', renderObject);
  });

router.post('/getText', function (req, res, next) {
  const googleAudioToText = googleSpeech.main;
  // const wavToFlac = WAV_to_FLAC.wavToFlac;
  // const filePath = req.body.recordingAddress;
  console.log(__dirname);
  const filePath = path.join(__dirname,"..", "test_audio", "audio.flac");
  googleAudioToText(filePath, function(err, result) {
    if (err) {
      throw err;
    }
    var textJSONResponse = result["results"][0]["alternatives"][0]["transcript"];
    // use textJSONResponse for sentiment analysis below

    res.json(textJSONResponse)
  })
});

module.exports = router;
