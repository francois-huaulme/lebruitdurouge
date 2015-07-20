'use strict';

describe('Filter: uniqueInList', function () {

  // load the filter's module
  beforeEach(module('lebruitdurougeApp'));

  // initialize a new instance of the filter before each test
  var uniqueInList;
  beforeEach(inject(function ($filter) {
    uniqueInList = $filter('uniqueInList');
  }));

  it('should return undefined for undefined input:"', function () {
    var output = uniqueInList(undefined, undefined); 
    expect(output).toBe(undefined);
  });

});
