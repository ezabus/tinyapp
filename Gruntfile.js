'use strict';

var path = require('path');

module.exports = function(grunt) {

  // learn more about config options:
  // https://github.com/firstandthird/load-grunt-config
  require('@sap/custdev-sapui5-infra-util/lib/grunt/load-grunt-config')(grunt, {
    overridePath: path.join(__dirname, 'grunt/config')
  });

};
