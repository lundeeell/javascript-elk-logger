'use strict';

let bunyan = require('bunyan');

module.exports = bunyan.createLogger({
  name: 'web',
  streams: [{
    level: 'info',
    stream: process.stdout
  }, {
    level: 'error',
    path: '/usr/src/log/web-error.log'
  }]
});