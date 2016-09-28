(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const login = require('../routes/login');
    const signup = require('../routes/signup');
    const player = require('../routes/player');
    const user = require('../routes/user');


    // *** register routes *** //
    app.use('/', routes);
    app.use('/login', login);
    app.use('/signup', signup);
    app.use('/player', player);
    app.use('/user', user);


  };

})(module.exports);
