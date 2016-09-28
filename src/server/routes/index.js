const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
const playerController = require('../controllers/player');
const isLoggedIn = require('../auth/init').isLoggedIn;

const beatDetector = require('../controllers/bpm-detector');
const bcrypt = require('bcryptjs');
const googleSpeech = require('../controllers/recognize');
// const WAV_to_FLAC = require('../controllers/WAV_to_FLAC');
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  const searchYoutube = playerController.searchYoutube;
  const renderObject = {};
  if (req.session.user) {
    console.log(req.session.user)
    renderObject.message = 'Welcome to Moody, ' + req.session.user.first_name;
    renderObject.loggedIn = true;
  } else {
    renderObject.message = 'Welcome to Moody, Stranger';
    renderObject.loggedIn = false;
  }
  // renderObject.user = req.session.user.username
  searchYoutube('hello vevo')
  .then(function(id) {
    renderObject.youtube_id = id;
    // renderObject.song_id = change this;
    console.log(renderObject.youtube_id);
    res.render('index', renderObject);
  })
  .catch(function(err) {
    res.send(err);
  });
});

//route will return one song within 1 from the score of the analysis text
router.get('/score/:score', (req, res, next) => {
  const score = parseInt(req.params.score);
  const renderObject = {};
  console.log(score);
  //the greater than sign needs to be changed to a less than before we go live
  renderObject.data = knex.raw(`select * from songs where abs(songs.score - ${score}) > 1 limit 1`)
  .then((results) => {
    console.log(results.rows);
    res.send(results.rows);
  })
  .catch((err) => {res.send (err);
  });
  // knex.raw(select * from songs where min @(songs.score - score))
});

router.post('/getBPM', function (req, res, next) {
  const googleAudioToText = googleSpeech.main;
  // const wavToFlac = WAV_to_FLAC.wavToFlac;
  const filePath = req.body.recordingAddress;
  // wavToFlac(filePath);

  var detectBPMVal = detectBPM(filePath)
  setTimeout(() => {
    res.json(detectBPMVal);
  }, 500)
});

// function ensureAuth(req, res, next) {
//   if (req.session.user) {
//     next()
//   } else {
//     res.redirect('/login')
//   }
// };

module.exports = router;
