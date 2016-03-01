'use strict';

describe('Filter: gpa', function () {

  // load the filter's module
  beforeEach(module('3601S16Lab5JsonDataProcessingApp'));

  // initialize a new instance of the filter before each test
  var gpa;
  beforeEach(inject(function ($filter) {
    gpa = $filter('gpa');
  }));

  //it('should return the input prefixed with "gpa filter:"', function () {
  //  var text = 'angularjs';
  //  expect(gpa(text)).toBe('gpa filter: ' + text);
  //});

});
