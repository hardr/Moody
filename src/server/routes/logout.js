const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const knex = require('../db/knex');
const isLoggedIn = require('../auth/init').isLoggedIn;

router.get('/', function (req, res, next) {
  req.session.user = null;
  const renderObject = {};
  renderObject.message = 'Come back soon!';
  // renderObject.loggedIn = isLoggedIn(req);
  res.render('logout', renderObject);
});

module.exports = router;
