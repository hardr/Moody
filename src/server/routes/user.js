const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const path = require('path');
const knex = require('../db/knex');


router.get('/:id', function (req, res, next) {
  const renderObject = {};
  const userID = req.params.id;
  renderObject.title = 'User Profile';
  knex('users')
  .where('users.id', userID)
  .select('*')
  .join('users_songs', 'users_songs.user_id', 'users.id')
  .join('songs', 'users_songs.song_id', 'songs.id')
  .then((results) => {
    renderObject.songs = results;
    renderObject.title = `User Profile: ${results[0].user_name}`;
    renderObject.welcome = `Welcome Back, ${results[0].first_name} ${results[0].last_name}!`
    console.log(results);
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
