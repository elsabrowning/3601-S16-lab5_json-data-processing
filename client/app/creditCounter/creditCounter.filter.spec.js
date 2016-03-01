'use strict';

describe('Filter: creditCounter', function () {

  // load the filter's module
  beforeEach(module('3601S16Lab5JsonDataProcessingApp'));

  // initialize a new instance of the filter before each test
  var creditCounter;
  beforeEach(inject(function ($filter) {
    creditCounter = $filter('creditCounter');
  }));

  //it('should return the input prefixed with "creditCounter filter:"', function () {
  //  var text = 'angularjs';
  //  expect(creditCounter(text)).toBe('creditCounter filter: ' + text);
  //});

});
