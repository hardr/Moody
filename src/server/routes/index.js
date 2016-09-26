const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const beatDetector = require('../controllers/bpm-detector');

router.get('/', function (req, res, next) {
  const renderObject = {};
  const dectectBPM = beatDetector.detectBPM;
  const filePath ="../test_audio/amclassical_beethoven_fur_elise.aac";
  renderObject.title = 'Welcome to Moody';
  var calcdBPM = dectectBPM(filePath);
  res.render('index', renderObject);
  });

module.exports = router;
