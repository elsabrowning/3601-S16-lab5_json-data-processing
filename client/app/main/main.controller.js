
'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $filter, socket) {
      this.$http = $http;
      this.awesomeThings = [];
      this.allCoursesArray =[];
      this.allSubjectArray = [];
      this.classArray = [];
      this.credits = -1;
      this.order = 'lastName';
      this.showGPA = 'none';

      $scope.totalCreditsFilter = $filter('totalCredits');

      $http.get('/api/students').then(response => {
        this.awesomeThings = response.data;
        socket.syncUpdates('student', this.awesomeThings);
      });

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('student')
        ;
      });
    }

    addThing()
    {
      if (this.newThing) {
        this.$http.post('/api/students', {name: this.newThing});
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/students/' + thing._id);
    }

    checkSubject(subjectName) {
      if (this.allSubjectArray.length == 0) {
        return true;
      } else {
        var k = 0;
        for (k = 0; k < this.allSubjectArray.length; k++){
          if(this.allSubjectArray[k] == subjectName){
            return false;
          }
        }
      }
      return true;
    };

    subjectArrayMaker(studentDataArray){
      var i = 0;
      var j = 0;
      for(i = 0; i < studentDataArray.length; i++){
        for(j = 0; j < studentDataArray[i].courses.length; j++){
          if (this.checkSubject(studentDataArray[i].courses[j].course.subject)) {
            this.allSubjectArray.push(studentDataArray[i].courses[j].course.subject);
          }
        }
      }
      return this.allSubjectArray;
    };


    courseArrayMaker(studentDataArray){
      var i = 0;
      var j = 0;
      for(i = 0; i < studentDataArray.length; i++){
        for(j = 0; j < studentDataArray[i].courses.length; j++){
          if (checkClass(studentDataArray[i].courses.course[j].name)) {
            this.allCoursesArray.push(studentDataArray[i].courses[j].course.name)
          }
        }
      }
    };

    linkingSubjectClass(studentDataArray) {
      var i = 0;
      var j = 0;
      var k = 0;
      for(i = 0; i < this.allSubjectArray.length; i++) {
        for(j = 0; j < sudentDataArray.length; j++) {
          for (k = 0; k < studentDataArray[j].courses.length; k++) {
            if (studentDataArray[j].courses[k].course.subject == allSubjectArray[i] && checkSubjectClass(studentDataArray[j].courses[k].course.name)) {

            }
          }
        }
      }
    };

    checkSubjectClass(courseName) {
      if (this.classArray.length == 0) {
        return true;
      } else {
        var k = 0;
        for (k = 0; k < this.classArray.length; k++){
          if(this.classArray[k] == courseName){
            return false;
          }
        }
      }
      return true;
    };

    checkClass(courseName) {
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



    //sumCredits() {
    //  var totalcredits = 0;
    //  var i = 0;
    //  for (i = 0; i < length; i++) {
    //    totalcredits += this.courses[i].course.credits
    //  }
    //  return totalcredits;
    //}



  //  testFunction() {
  //  var options = [1, 2, 3, 4, 5, 6];
  //  var i =0;
  //  for (i = 0; i < options.length; i++) {
  //    var opt = options[i];
  //    var el = document.createElement("option");
  //    el.textContent = opt;
  //    el.value = opt;
  //    document.getElementById("selectNumber").appendChild(el);
  //  }
  //}
  //
  }

  angular.module('3601S16Lab5JsonDataProcessingApp')
    .controller('MainController', MainController);

})();
