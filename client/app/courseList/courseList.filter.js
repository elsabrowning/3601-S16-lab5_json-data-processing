'use strict';

angular.module('3601S16Lab5JsonDataProcessingApp')
  .filter('courseList', function () {

    var indivCourses = function(studentData) {
      var coursesArray = [];
      var courseIndex = 0;
      for (courseIndex = 0; courseIndex < studentData.courses.length; courseIndex++) {
          coursesArray.push(" " + studentData.courses[courseIndex].course.name);
      }
      return coursesArray;
    };



    return function (input) {
      return 'Courses: ' + indivCourses(input);
    };

  });
