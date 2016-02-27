'use strict';

angular.module('3601S16Lab5JsonDataProcessingApp')
  .filter('classFilter', function () {
    var allCoursesArray = [];
    var nameLaterFunction = function(studentDataArray){
      var i = 0;
      var j = 0;
      for(i = 0; i < studentDataArray.length; i++){
        for(j = 0; j < studentDataArray[i].courses.length; j++){
          if (checkClass(studentDataArray[i].courses.course[j].name)) {
            allCoursesArray.push(studentDataArray[i].courses[j].course.name)
          }
        }
      }
    };

    var checkClass = function(courseName) {
      if (allCourseArray.length == 0) {
        return true;
      } else {
        var k = 0;
        for (k = 0; k < allCoursesArray.length; k++){
          if(allCourseArray[k] == courseName){
            return false;
          }
        }
          }
        return true;
      };
    return function (input) {
      return 'classFilter filter: ' + input;
    };
  });
