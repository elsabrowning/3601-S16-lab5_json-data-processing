'use strict';

angular.module('3601S16Lab5JsonDataProcessingApp')
  .filter('findMajor', function () {


    var checkMajor = function(data, major){ //data.courses[i]
      for(var i=0; i < data.length; i++) {
        if (major == data[i].major1) {
         return data[i].major1;
        }
        if (major == data[i].major2) {
          return data[i].major1;
        }
        else {
          return "";
        }
      }
    };


    return function (input) {
      return 'findMajor filter: ' + input;
    };


  });

