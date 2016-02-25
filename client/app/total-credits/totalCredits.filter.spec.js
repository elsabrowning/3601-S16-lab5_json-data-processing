'use strict';

describe('Filter: totalCredits', function () {

  // load the filter's module
  beforeEach(module('3601S16Lab5JsonDataProcessingApp'));

  // initialize a new instance of the filter before each test
  var totalCredits;
  beforeEach(inject(function ($filter) {
    totalCredits = $filter('totalCredits');
  }));

  it('should return the input prefixed with "totalCredits filter:"', function () {
    var text = 'angularjs';
    expect(totalCredits(text)).toBe('totalCredits filter: ' + text);
  });

});
