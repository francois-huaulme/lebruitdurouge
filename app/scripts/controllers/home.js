'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:HomectrlCtrl
 * @description
 * # HomectrlCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
  .controller('HomeCtrl', ['$scope','$routeParams','projects',
  function($scope,$routeParams,projects) {
    $scope.projects = projects.query();
    var filter = $routeParams.filter;
    if(filter == undefined) {
      $scope.tags = [];
    } else {
      $scope.tags = [filter];   
    }
    if(false)
    alert($scope);
  }]
);

