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
  .filter('shuffle', function () {
    return function (input) {
      if (input == undefined) {
        return undefined;
      }
      var shuffledInput = input.slice();
      for (var j, x, i = shuffledInput.length; i; j = Math.floor(Math.random() * i), x = shuffledInput[--i], shuffledInput[i] = shuffledInput[j], shuffledInput[j] = x) {
      }
      return shuffledInput;
    };
  });
