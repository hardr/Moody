const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const beatDetector = require('../controllers/bpm-detector');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Moody';
  res.render('index', renderObject);
  });

  router.post('/getBPM', function (req, res, next) {
    const detectBPM = beatDetector.detectBPM;
    // const filePath = req.body.recordingAddress;
    const filePath = "../test_audio/BeethovensSymphonyNo.9scherzo_vbr.mp3";
    var detectBPMVal = detectBPM(filePath)
    setTimeout(() => {
      res.json(detectBPMVal);
    }, 500)
    });

module.exports = router;
