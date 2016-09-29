const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const path = require('path');
const knex = require('../db/knex');


router.get('/:id', function (req, res, next) {
  const renderObject = {};
  const userID = req.session.user.id;
  renderObject.title = 'User Profile';
  renderObject.loggedIn = true;
  knex('users')
  .where('users.id', userID)
  .select('*')
  .join('users_songs', 'users_songs.user_id', 'users.id')
  .join('songs', 'users_songs.song_id', 'songs.id')
  .then((results) => {
    renderObject.songs = results;
    console.log('ze results', results);
    renderObject.title = 'User Profile: ' + req.session.user.first_name;
    renderObject.welcome = 'Welcome Back, ' + req.session.user.first_name + '!';
    res.render('user', renderObject);
  })
});

router.post('/addSong', function (req, res, next) {
  console.log(req.body);
  const song_id = req.body.song_id;
  const user_id = req.session.user.id;
  knex('users_songs')
  .insert({
    user_id: song_id,
    song_id: song_id
  })
  .returning('*')
  .then((results) => {
    if (results.length) {
      res.status(200);
    }
    else {
      res.status(500);
    }
  })
  .catch((err) => {
    res.send('Error');
  });
});

module.exports = router;
