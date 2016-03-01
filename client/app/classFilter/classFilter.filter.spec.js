'use strict';

describe('Filter: classFilter', function () {

  // load the filter's module
  beforeEach(module('3601S16Lab5JsonDataProcessingApp'));

  // initialize a new instance of the filter before each test
  var classFilter;
  beforeEach(inject(function ($filter) {
    classFilter = $filter('classFilter');
  }));

  //it('should return the input prefixed with "classFilter filter:"', function () {
  //  var text = 'angularjs';
  //  expect(classFilter(text)).toBe('classFilter filter: ' + text);
  //});

});
