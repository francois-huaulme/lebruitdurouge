'use strict';

describe('Filter: shuffle', function () {

  // load the filter's module
  beforeEach(module('lebruitdurougeApp'));

  // initialize a new instance of the filter before each test
  var shuffle;
  beforeEach(inject(function ($filter) {
    shuffle = $filter('shuffle');
  }));

  it('should return the input prefixed with "shuffle filter:"', function () {
    var input = ['1', '2', '3'];
    var output = shuffle(input); 
    expect(output).toContain('1');
    expect(output).toContain('2');
    expect(output).toContain('3');
  });

});
