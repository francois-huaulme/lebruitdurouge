'use strict';

/**
 * @ngdoc filter
 * @name lebruitdurougeApp.filter:unique
 * @function
 * @description
 * # unique
 * Filter in the lebruitdurougeApp.
 */
angular.module('lebruitdurougeApp')
  .filter('unique', function() {
    return function(input, key) {
        if(input == undefined) {
          return undefined;   
        }
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
  });
