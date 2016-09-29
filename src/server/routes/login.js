const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const knex = require('../db/knex');

const existingUser = require('../auth/init').existingUser;


router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Log In - Welcome Back!';
  res.render('login',renderObject);
});

router.post('/', function (req, res, next) {
  console.log('req.body', req.body);
  const loginUsername = req.body.user_name;
  const loginPassword = bcrypt.hashSync(req.body.password, salt);

  console.log('route pass', existingUser(loginUsername, loginPassword));

  if (existingUser(loginUsername, loginPassword) === 1) {
    res.redirect('/');
  } else if (existingUser(loginUsername, loginPassword) === 0){
    const renderObject = {};
    renderObject.message = 'Wrong password! ;-)';
    res.render('login', renderObject);
  } else {
    res.redirect('/signup');
  }
});

module.exports = router;
