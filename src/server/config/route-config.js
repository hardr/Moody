(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const login = require('../routes/login');
    const signup = require('../routes/signup');
    const logout = require('../routes/logout');
    // const player = require('../routes/player');//

    // *** register routes *** //
    app.use('/', routes);
    app.use('/login', login);
    app.use('/signup', signup);
    app.use('/logout', logout);
    // app.use('/player', player);//

  };

})(module.exports);
