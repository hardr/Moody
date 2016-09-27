const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const knex = require('knex');
let bcrypt = require('bcryptjs');


router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Log In - Welcome Back!';
    res.redirect('index', renderObject);
  });



module.exports = router;
