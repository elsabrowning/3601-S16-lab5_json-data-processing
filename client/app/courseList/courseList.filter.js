'use strict';

angular.module('3601S16Lab5JsonDataProcessingApp')
  .filter('courseList', function () {

    var indivCourses = function(studentData) {
      var coursesArray = [];
      var courseIndex = 0;
      for (courseIndex = 0; courseIndex < studentData.courses.length; courseIndex++) {
          coursesArray.push(
            " " + studentData.courses[courseIndex].course.subject +
            " " + studentData.courses[courseIndex].course.courseNumber +
            ": " + studentData.courses[courseIndex].course.name +
            " (" + studentData.courses[courseIndex].course.credits +
            ") [" + studentData.courses[courseIndex].grade + "]");
      }
      return coursesArray;
    };



    return function (input) {
      return 'Courses: ' + indivCourses(input);
    };

  });
