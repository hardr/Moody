const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const beatDetector = require('../controllers/bpm-detector');
const bcrypt = require('bcryptjs');
const google_speech = require('google-speech');
const googleSpeech = require('google-speech');



router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Moody';
  renderObject.song_id = 'hRK7PVJFbS8';
  res.render('index', renderObject);
  });

  router.post('/getBPM', function (req, res, next) {
    var googleAudioToText = googleSpeech.googleAudioToText;
    const detectBPM = beatDetector.detectBPM;
    const filePath = req.body.recordingAddress;
    // const filePath = "../test_audio/BeethovensSymphonyNo.9scherzo_vbr.mp3";
    googleAudioToText(filePath);

    var detectBPMVal = detectBPM(filePath)
    setTimeout(() => {
      res.json(detectBPMVal);
    }, 500)
    });

module.exports = router;
