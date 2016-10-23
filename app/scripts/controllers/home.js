'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:HomectrlCtrl
 * @description
 * # HomectrlCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
  .controller('HomeCtrl', ['$scope', '$routeParams', '$filter', 'projects',
    function ($scope, $routeParams, $filter, projects) {
      var filterParam = $routeParams.filter;
      $scope.slides = projects.query(function () {
        // Get filter from param
        var filteredProjects;
        if (filterParam === undefined) {
          filteredProjects = $scope.slides;
        } else {
          filteredProjects = $filter('uniqueInList')($scope.slides, [filterParam]);
        }
        $scope.slides = $filter('shuffle')(filteredProjects);
      });
    }]
  );

