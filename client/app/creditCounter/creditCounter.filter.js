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

    var freshmenFunction = function(studentDataArray, creditCount) {
      if(creditCount == null){
        return studentDataArray;
      }
       //no freshmen in database currently, need ~50 to see more variation
      return studentDataArray.filter(function(student) {
        if(creditCount == 120){
          console.log("got to freshmenFunction if statement");
          return (creditCount-30) <= indivTotalCredits(student);
        } else {
          return (creditCount - 30) <= indivTotalCredits(student) && indivTotalCredits(student) <= creditCount;
        }
        });
    };

    return function (input, credits) {
      return freshmenFunction(input, credits);
    };
  });
