const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const knex = require('knex');
let bcrypt = require('bcryptjs');


router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Log In - Welcome Back!';
    res.render('login', renderObject);
  });

// router.post('/', (req, res, next) => {
//     knex('users').insert(
//       first_name,
//       last_name
//
//     )}

module.exports = router;
