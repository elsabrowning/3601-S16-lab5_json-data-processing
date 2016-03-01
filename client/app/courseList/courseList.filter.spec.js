'use strict';

describe('Filter: courseList', function () {

  // load the filter's module
  beforeEach(module('3601S16Lab5JsonDataProcessingApp'));

  // initialize a new instance of the filter before each test
  var courseList;
  beforeEach(inject(function ($filter) {
    courseList = $filter('courseList');
  }));

  //it('should return the input prefixed with "courseList filter:"', function () {
  //  var text = 'angularjs';
  //  expect(courseList(text)).toBe('courseList filter: ' + text);
  //});

});
