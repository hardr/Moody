// const express = require('express');
// const router = express.Router();
// const indexController = require('../controllers/index');
// const playerController = require('../controllers/player');
// const knex = require('../db/knex');
//
// router.get('/', ensureAuth, function (req, res, next) {
//   const searchYoutube = playerController.searchYoutube;
//   const renderObject = {};
//   renderObject.title = 'Acting All Moody';
//   renderObject.user = req.session.user.username
//   searchYoutube('hello vevo')
//   .then(function(id) {
//     renderObject.song_id = id;
//     console.log(renderObject.song_id = id);
//     res.render('index', renderObject);
//   });
// });
//
// function ensureAuth(req, res, next) {
//   if (req.session.user) {
//     next()
//   } else {
//     res.redirect('/login')
//   }
// }
//
// //route will return one song within 1 from the score of the analysis text
//   router.get('/:score', (req, res, next) => {
//     const score = parseInt(req.params.score);
//     const renderObject = {};
//     console.log(score);
//     //the greater than sign needs to be changed to a less than before we go live
//     renderObject.data = knex.raw(`select * from songs where abs(songs.score - ${score}) > 1 limit 1`)
//     .then((results) => {
//       console.log(results.rows);
//       res.send(results.rows);
//     })
//     .catch((err) => {res.send (err);
//     });
//     // knex.raw(select * from songs where min @(songs.score - score))
//   });
// module.exports = router;
