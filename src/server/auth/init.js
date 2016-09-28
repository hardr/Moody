const passport = require('passport');
const knex = require('../db/knex');

function isLoggedIn(req) {
  if (req.session.user) {
    return true;
  }
  return false;
};

module.exports = {
  isLoggedIn
}
