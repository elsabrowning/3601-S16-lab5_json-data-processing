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

    //var checkMajors = function(input, majors){
    //  var i=0;
    //  console.log(majors.majors);
    //  for(i=0; i< majors.length; i++){
    //
    //    if(checkMajor(input, majors[i])){
    //
    //      return true;
    //    }
    //  }
    //  return false;
    //
    //}

    return function (input, majors) {
      return input.filter(function(element) {
        //console.log(checkMajors(element, majors));
        return checkMajor(element, majors);
        });
    };
  });
