(function() {

  'use strict';

  // *** dependencies *** //
  const express = require('express');
  const app = express();
  const appConfig = require('./config/main-config.js');
  const routeConfig = require('./config/route-config.js');
  const errorConfig = require('./config/error-config.js');
  const http = require('http').Server(app);



  // *** config *** //
  appConfig.init(app, express);
  routeConfig.init(app);
  errorConfig.init(app);


  module.exports = app;

}());
