
'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.awesomeThings = [];
      this.boxcheck = 0;

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
}

    sumCredits() {
      var totalcredits = 0;
      for (i = 0; i < length; i++) {
        totalcredits += this.courses[i].course.credits
      }
      return totalcredits;
    }


    orderName() {
      this.boxcheck=1;
      console.log("orderName");
    };

    orderDOB() {
      this.boxcheck=2;
      console.log("orderDOB");
    };


    orderByFunction()
    {
      if (this.boxcheck == 1) {
        return 'lastName';
      } else{
        console.log("Time to cry about the order by");
      }
    };

    checkYear(student) {
      //calculates student year

  }

  }

  angular.module('3601S16Lab5JsonDataProcessingApp')
    .controller('MainController', MainController);

})();
