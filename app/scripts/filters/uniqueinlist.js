'use strict';

/**
 * @ngdoc filter
 * @name lebruitdurougeApp.filter:uniqueInList
 * @function
 * @description
 * # uniqueInList
 * Filter in the lebruitdurougeApp.
 */
angular.module('lebruitdurougeApp')
  .filter('uniqueInList', function () {
    return function (input, values) {
      if (input === undefined || values === undefined) {
        return undefined;
      }
      if (values.length === 0) {
        return input;
      }
      var filteredList = [];
      for (var j = 0; j < values.length; j++) {
        var currentValue = values[j];
        for (var i = 0; i < input.length; i++) {
          if (input[i].tags.indexOf(currentValue) >= 0) {
            filteredList.push(input[i]);
          }
        }
      }
      return filteredList;
    };
  });
