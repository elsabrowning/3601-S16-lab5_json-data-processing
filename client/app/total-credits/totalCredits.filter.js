'use strict';

angular.module('3601S16Lab5JsonDataProcessingApp')
  .filter('totalCredits', function () {

    var gradeLetterConverter = function(str){
      if (str == "A") {
        return 4.00;
      } else if(str == "A-"){
        return 3.67;
      } else if(str == "B+") {
        return 3.33;
      } else if(str == "B") {
        return 3.00;
      } else if(str == "B-") {
        return 2.67;
      } else if(str == "C+") {
        return 2.33;
      } else if(str == "C") {
        return 2.00;
      } else if(str == "C-") {
        return 1.67;
      } else if(str == "D+") {
        return 1.33;
      } else if(str == "D") {
        return 1.00;
      } else if(str == "D-") {
        return 0.67;
      } else if(str == "F") {
        return 0.00;
      } else {
        return "Error";
      }

    };

    var countCredits = function(data){ //data.courses[i]
      var totalCredits = 0;
      for(var i=0; i < data.length; i++) {

        var gradeNumber = gradeLetterConverter(data[i].grade);

        if (gradeNumber !== "Error" || gradeNumber !== "F") {
          totalCredits += data[i].course.credits;
        }


      }
      return totalCredits;
    };


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


    return function (student) {
      return "Total Credits: " + indivTotalCredits(student);
    };
  });
