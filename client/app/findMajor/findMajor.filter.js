'use strict';

angular.module('3601S16Lab5JsonDataProcessingApp')
  .filter('findMajor', function () {


    var calculateGPA = function(data, major){ //data.courses[i]
      for(var i=0; i < data.length; i++) {
        if (major == data[i].major1 || major == data[i].major2) {
         return true;
        } else {
          return false;
        }
      }
    };

    if calculateGPA()

    return function (input) {
      return 'findMajor filter: ' + input;
    };


  });
