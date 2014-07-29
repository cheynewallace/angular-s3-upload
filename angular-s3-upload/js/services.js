'use strict';

var services = angular.module('services', []);

services.factory('FileService',['$http', function($http) {
  var fileSvc = {};

  fileSvc.pushToS3 = function(creds) {

  }

  return fileSvc;
}]);