'use strict';

describe('Filter: studentMajor', function () {

  // load the filter's module
  beforeEach(module('3601S16Lab5JsonDataProcessingApp'));

  // initialize a new instance of the filter before each test
  var StudentMajor;
  beforeEach(inject(function ($filter) {
    StudentMajor = $filter('studentMajor');
  }));

  //it('should return the input prefixed with "studentMajor filter:"', function () {
  //  var text = 'angularjs';
  //  expect(studentMajor(text)).toBe('studentMajor filter: ' + text);
  //});

});
