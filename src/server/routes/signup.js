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
    console.log(req.body);
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const userName = req.body.userName;
    const password = req.body.password;
    let hash = bcrypt.hashSync(password, salt);
    console.log(hash);

    knex('users')
    .insert({first_name:first_name, last_name: last_name, email: email, userName: userName, password: hash})
    .then((newUser) => {

      res.send(newUser);
    })
    .catch((err) => {
      res.send('Error');
    });
  });


module.exports = router;
