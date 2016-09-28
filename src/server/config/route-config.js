(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const login = require('../routes/login');
    const signup = require('../routes/signup');
    const logout = require('../routes/logout');
    const user = require('../routes/user');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/login', login);
    app.use('/signup', signup);
    app.use('/logout', logout);
    app.use('/user', user);

  };

})(module.exports);
