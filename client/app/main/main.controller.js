
'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $filter, socket) {
      this.$http = $http;
      this.awesomeThings = [];
      this.boxcheck = 0;
      this.credits = -1;
      this.order = 'lastName';

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



    //sumCredits() {
    //  var totalcredits = 0;
    //  var i = 0;
    //  for (i = 0; i < length; i++) {
    //    totalcredits += this.courses[i].course.credits
    //  }
    //  return totalcredits;
    //}



    orderName() {
      this.boxcheck=1;
      console.log("orderName");
    };

    orderDOB() {
      this.boxcheck=2;
      console.log("orderDOB");
    };
    orderCredits() {
      this.boxcheck=3;
      console.log("orderCredi totalCreditsts");
    };



    orderByFunction()
    {
      if (this.boxcheck == 1) {
        return 'lastName';
      }
      else if (this.boxcheck == 2) {
        return 'dateOfBirth';
      }
      else if (this.boxcheck == 3) {
        return 'totalCredits';
      }
    };

    indivTotalCredits(studentData) {
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
    }

  }

  angular.module('3601S16Lab5JsonDataProcessingApp')
    .controller('MainController', MainController);

})();
