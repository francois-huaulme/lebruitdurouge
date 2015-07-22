'use strict';

/**
 * @ngdoc directive
 * @name lebruitdurougeApp.directive:header
 * @description
 * # header
 */
angular.module('lebruitdurougeApp')
  .directive('header', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "/templates/header.html",
        controller: ['$scope', '$filter', 'projects', function ($scope, $filter, projects) {
            $scope.projects = projects.query();
        }]
    };
  });
