const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const bcrypt = require('bcryptjs');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Log In - Welcome Back!';
    res.render('login', renderObject);
  });

router.post('/login', (req, res, next) => {
  let userEmail = req.body.email;
  let password = req.body.password;
  let msg;
  if (!userEmail || !password) {
    let results = {};
    results.message = 'Must enter both username and password';
    res.render('users/login', results);
  } else {
    knex('users')
    .then((users) => {
      let user = users.filter((user) => user.email === userEmail)[0];
      if (!user) {
        let results = {};
        results.message = 'Incorrect username or password.';
        res.render('users/login', results);
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.user = user;
          res.redirect('/index');
        } else {
          let results = {};
          results.message = 'Incorrect username or password.';
          res.render('login', results);
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
});

module.exports = router;
