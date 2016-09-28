const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const bcrypt = require('bcryptjs');
const knex = require('../db/knex');



router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Log In - Welcome Back!';
  res.render('login',renderObject);
});

router.post('/', function (req, res, next) {
  const loginUsername = req.body.userName;
  const loginPassword = req.body.password;
  let hash = bcrypt.hashSync(password, salt);

  knex('users')
  .insert({
    first_name:first_name,
    last_name: last_name,
    email: email,
    userName: userName,
    password: hash
  })
  .returning('*')
  .then((newUser) => {
    req.session.user = {
      id: newUser[0].id,
      username: newUser[0].userName,
      password: newUser[0].password,
      first_name: newUser[0].first_name
    };
    res.redirect('/');
  })
  .catch((err) => {
    console.log(err);
    res.send('Error');
  });
});

module.exports = router;
