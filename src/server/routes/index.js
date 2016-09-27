const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const beatDetector = require('../controllers/bpm-detector');
const bcrypt = require('bcryptjs');
const googleSpeech = require('../controllers/recognize');
const WAV_to_FLAC = require('../controllers/WAV_to_FLAC');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Moody';
  renderObject.song_id = 'hRK7PVJFbS8';
  res.render('index', renderObject);
  });

  router.post('/getBPM', function (req, res, next) {
    const googleAudioToText = googleSpeech.main;
    const wavToFlac = WAV_to_FLAC.wavToFlac
    const filePath = req.body.recordingAddress;
    wavToFlac(filePath);


    var detectBPMVal = detectBPM(filePath)
    setTimeout(() => {
      res.json(detectBPMVal);
    }, 500)
    });

module.exports = router;
