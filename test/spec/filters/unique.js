'use strict';

describe('Filter: unique', function () {

  // load the filter's module
  beforeEach(module('lebruitdurougeApp'));

  // initialize a new instance of the filter before each test
  var unique;
  beforeEach(inject(function ($filter) {
    unique = $filter('unique');
  }));

  it('should return undefined for undefined input:"', function () {
    var output = unique(undefined, undefined); 
    expect(output).toBe(undefined);
  });
});
