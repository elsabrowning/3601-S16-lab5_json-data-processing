'use strict';

describe('Filter: findMajor', function () {

  // load the filter's module
  beforeEach(module('3601S16Lab5JsonDataProcessingApp'));

  // initialize a new instance of the filter before each test
  var findMajor;
  beforeEach(inject(function ($filter) {
    findMajor = $filter('findMajor');
  }));

  it('should return the input prefixed with "findMajor filter:"', function () {
    var text = 'angularjs';
    expect(findMajor(text)).toBe('findMajor filter: ' + text);
  });

});
