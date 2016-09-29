const passport = require('passport');
const knex = require('../db/knex');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

function isLoggedIn(req) {
  if (req.session.user) {
    return true;
  }
  return false;
};

function existingUser(username, password) {
  return knex.select('*').from('users')
  .whereIn('user_name', username)
  .then(user => {
    if (user.length === 1) {
      console.log('passes', password, user[0].password);
      let compareBool = bcrypt.compareSync(password, user[0].password);
      if (compareBool) {
        console.log('fn true');
        req.session.user = user[0];
        return 1;
      } else {
        console.log('fn false');
        return 0;
      }
    } else {
      console.log('fn no user');
      return false;
    }
  })
  .catch(err => {
    console.log('fn out err', err);
    return err;
  })
};

module.exports = {
  isLoggedIn,
  existingUser
}
