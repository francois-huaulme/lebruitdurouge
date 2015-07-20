'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:HomectrlCtrl
 * @description
 * # HomectrlCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
  .controller('HomeCtrl', function($scope, $http, projects) {
    $scope.projects = projects.query();
    $scope.tags = {};
  });
