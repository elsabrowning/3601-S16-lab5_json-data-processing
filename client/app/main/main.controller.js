
'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $filter, socket) {
      this.$http = $http;
      this.awesomeThings = [];
      this.boxcheck = 0;
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



    //sumCredits() {
    //  var totalcredits = 0;
    //  var i = 0;
    //  for (i = 0; i < length; i++) {
    //    totalcredits += this.courses[i].course.credits
    //  }
    //  return totalcredits;
    //}

    testFunction() {
    var options = [1, 2, 3, 4, 5, 6];
    var i =0;
    for (i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      document.getElementById("selectNumber").appendChild(el);
    }
  }

  }

  angular.module('3601S16Lab5JsonDataProcessingApp')
    .controller('MainController', MainController);

})();
