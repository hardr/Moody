const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const knex = require('knex');


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
    console.log('post log',userName);

    knex('users').insert({first_name:first_name, last_name: last_name, email: email, userName: userName})
    .then(res.redirect('/'));
  });


module.exports = router;
