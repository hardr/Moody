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
});

router.post('/addSong', function (req, res, next) {
  const song_id = req.session.song.song_id;
  const user_id = req.session.user.id;
  knex('users_songs')
  .insert({
    user_id: user_id,
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

router.delete('/deleteSong', function (req, res, next) {
  const song_uuid = req.body.song_uuid;
  const user_id = req.session.user.id;
  knex('users_songs')
  .where('uuid', song_uuid)
  .del()
  .then((result) => {
    res.status(200).json({
      status: 'success',
      message: `${results} is gone!`
    });
  })
  .catch((err) => {
    res.status(400).json({
      status: 'failure',
      message: 'entry not found'
    });
    res.send('Error');
  });
});
module.exports = router;
