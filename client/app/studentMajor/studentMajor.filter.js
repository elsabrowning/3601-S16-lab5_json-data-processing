'use strict';

angular.module('3601S16Lab5JsonDataProcessingApp')
  .filter('studentMajor', function () {
    var checkMajor = function(input, major){
      if(major == input.major1){
        return true;
      } else if(major == input.major2) {
        return true;
      } else {
        return false;
      }
    }


    return function (input, major) {
      return input.filter(function(element) {
        console.log(checkMajor(element, major));
        return checkMajor(element, major);
        });
    };
  });
