'use strict';

/**
 * @ngdoc filter
 * @name lebruitdurougeApp.filter:shuffle
 * @function
 * @description
 * # shuffle
 * Filter in the lebruitdurougeApp.
 */
angular.module('lebruitdurougeApp')
  .filter('shuffle', function() {
    return function(input) {
        for(var j, x, i = input.length; i; j = Math.floor(Math.random() * i), x = input[--i], input[i] = input[j], input[j] = x);
        return input;
    };
  });
