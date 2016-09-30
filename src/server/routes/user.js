const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const path = require('path');
const knex = require('../db/knex');


router.get('/', function (req, res, next) {
  const renderObject = {};
  const userID = req.session.user.id;
  renderObject.title = 'User Profile';
  renderObject.loggedIn = true;
  if (req.session.user.admin) {
    knex('users')
    .select('user_name', 'id', 'admin')
    .then((users) => {
      renderObject.users = users;
      renderObject.title = 'Admin Page: ' + req.session.user.first_name;
      renderObject.welcome = 'Admin this shit, ' + req.session.user.first_name + '!';
      knex('songs')
      .select('song_name', 'sentiment_rating', 'id')
      .then(songs => {
        renderObject.songs = songs;
        res.render('admin', renderObject);
      })
    })
    .catch((err) => {
      console.log(err);
      res.send('Error');
    });
  } else {
    knex('users')
    .where('users.id', userID)
    .select('*')
    .join('users_songs', 'users_songs.user_id', 'users.id')
    .join('songs', 'users_songs.song_id', 'songs.id')
    .then((results) => {
      renderObject.songs = results;
      renderObject.title = 'User Profile: ' + req.session.user.first_name;
      renderObject.welcome = 'Welcome Back, ' + req.session.user.first_name + '!';
      res.render('user', renderObject);
    })
    .catch((err) => {
      console.log(err);
      res.send('Error');
    });
  }
});

router.post('/addSong', function (req, res, next) {
  console.log(req.body);
  const song_id = req.session.song.song_id;
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
