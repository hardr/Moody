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
  .then((users) => {
    renderObject.users = users;
    res.render('user', renderObject);
  })
});

module.exports = router;
