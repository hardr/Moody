const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Sign Up - Welcome to Moody!';
  res.render('signup', renderObject);
});

router.post('/', function (req, res, next) {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const user_name = req.body.user_name;
  const password = req.body.password;
  let hash = bcrypt.hashSync(password, salt);

  if (!first_name || !last_name || !email || !user_name || !password) {
    let result = {};
    result.message = 'Partially complete.. that\'s what she said.';
    res.render('signup', result);
  } else {
    knex('users')
    .then(users => {
      let user = users.filter(user => user.user_name === user_name)[0];
      if (!user) {
        knex('users')
        .insert({
          first_name:first_name,
          last_name: last_name,
          email: email,
          user_name: user_name,
          password: hash
        })
        .returning('*')
        .then((newUser) => {
          req.session.user = {
            id: newUser[0].id,
            user_name: newUser[0].user_name,
            password: newUser[0].password,
            first_name: newUser[0].first_name
          };
          res.redirect('/');
        })
        .catch((err) => {
          console.log('inside promise chain',err);
          res.send('Error');
        });
      } else {
        res.redirect('/login');
      }
    })
    .catch(err => {
      res.send('ouytside promise chain', err);
    })
  }
});

module.exports = router;
