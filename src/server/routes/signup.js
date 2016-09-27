const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');


router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Sign Up - Welcome to Moody!';
    res.render('signup', renderObject);
  });

module.exports = router;
