(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const login = require('../routes/login');
    const signup = require('../routes/signup');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/login', login);
    app.use('/signup', signup);

  };

})(module.exports);
