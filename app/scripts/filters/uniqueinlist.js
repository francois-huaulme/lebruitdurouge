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
  .filter('uniqueInList', function() {
    return function(input, values) {
        if(input == undefined || values == undefined) {
            return undefined;   
        }
        var filteredList = [];
        for(var i = 0; i < input.length; i++) {
            if(values[input[i].tag] || values[input[i].tag] == undefined) {
                filteredList.push(input[i]);
            }
        }
        return filteredList;
    };
  });