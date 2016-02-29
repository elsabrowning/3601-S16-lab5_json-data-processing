'use strict';

angular.module('3601S16Lab5JsonDataProcessingApp')
  .filter('classFilter', function () {

    return function (input) {
      return 'classFilter filter: ' + input;
    };
  });
