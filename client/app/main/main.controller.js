
'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $filter, socket) {
      this.$http = $http;
      this.awesomeThings = [];
      this.allCoursesArray =[];
      this.allMajorsArray =[];
      this.allMajorsArray2 =[];
      this.allSubjectArray = [];
      this.classArray = [];
      this.credits = -1;
      this.subjectClassArray = [];
      this.overallArray = [];
      this.order = 'lastName';
      this.showGPA = 'none';
      this.subject = null;
      this.major;

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

    majorArrayMaker(studentDataArray){
      var i = 0;
      for(i = 0; i < studentDataArray.length; i++){

        if (this.checkMajor(studentDataArray[i].major1)) {
          this.allMajorsArray.push(studentDataArray[i].major1);

        }

        if (this.checkMajor(studentDataArray[i].major2)) {
          this.allMajorsArray.push(studentDataArray[i].major2);

        }
      }

      return this.allMajorsArray;
    };

    allArrayMaker(studentDataArray){
      var i = 0;
      for(i = 0; i < studentDataArray.length; i++){

        if (this.checkMajorall(studentDataArray[i].major1)) {
          this.allMajorsArray2.push(studentDataArray[i].major1);

        }

        if (this.checkMajorall(studentDataArray[i].major2)) {
          this.allMajorsArray2.push(studentDataArray[i].major2);
        }
      }
      console.log(this.allMajorsArray2);
      return this.allMajorsArray2;

    };


    linkingSubjectClass(studentDataArray) {
      var i = 0;
      var j = 0;
      var k = 0;
      for(i = 0; i < this.allSubjectArray.length; i++) {
        for(j = 0; j < sudentDataArray.length; j++) {
          for (k = 0; k < studentDataArray[j].courses.length; k++) {
            if (studentDataArray[j].courses[k].course.subject == allSubjectArray[i] && this.checkSubjectClass(studentDataArray[j].courses[k].course.name)) {
              this.classArray.push(studentDataArray[j].courses[k].course.name)
            }
          }
        }
        this.subjectClassArray.push(this.allSubjectArray[i]);
        this.subjectClassArray.push(this.classArray);
        this.classArray = [];
        this.overallArray.push(this.subjectClassArray);
        this.subjectClassArray = [];
      }
      return this.overallArray;
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

    checkMajor(majorName) {
      if (this.allMajorsArray.length == 0) {
        return true;
      } else {
        var k = 0;
        for (k = 0; k < this.allMajorsArray.length; k++){
          if(majorName == null){
            return false;
          } else if(this.allMajorsArray[k] == majorName){
            return false;
          }
        }
      }
      return true;

    };

    checkMajorall(majorName) {
      if (this.allMajorsArray2.length == 0) {
        return true;
      } else {
        var k = 0;
        for (k = 0; k < this.allMajorsArray2.length; k++){
          if(this.allMajorsArray2[k] == majorName){
            return false;
          }
        }
      }
      return true;

    };

  }

  angular.module('3601S16Lab5JsonDataProcessingApp')
    .controller('MainController', MainController);

})();
