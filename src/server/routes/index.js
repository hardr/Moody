const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const beatDetector = require('../controllers/bpm-detector');

router.get('/', function (req, res, next) {
  const renderObject = {};
  const detectBPM = beatDetector.detectBPM;
  const filePath ="../test_audio/amclassical_beethoven_fur_elise.aac"
  renderObject.title = 'Welcome to Moody';
  var detectBPMVal = detectBPM(filePath)
  setTimeout(() => {
    renderObject.bpm = detectBPMVal
    res.render('index', renderObject);
  }, 500)
  });

module.exports = router;
