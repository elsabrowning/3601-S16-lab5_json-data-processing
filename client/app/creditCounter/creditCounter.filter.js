'use strict';

angular.module('3601S16Lab5JsonDataProcessingApp')
  .filter('creditCounter', function () {
    var indivTotalCredits = function(studentData) {
      var indivStudentSum = 0;
      var courseIndex = 0;
      for (courseIndex = 0; courseIndex < studentData.courses.length; courseIndex++) {
        if (studentData.courses[courseIndex].grade == "IP" || studentData.courses[courseIndex].grade == "F") {
          //do nothing
        } else {
          indivStudentSum += studentData.courses[courseIndex].course.credits;
        }
      }
      return indivStudentSum;
    };

    var freshmenFunction = function(studentData) {
      if (indivTotalCredits(studentData) >= 50) { //no freshmen in database currently, need ~50 to see more variation
        //do nothing
      } else {
        return studentData;
      }
    };

    return function (input) {
      return freshmenFunction(input);
    };
  });
