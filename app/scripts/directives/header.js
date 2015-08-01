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
      controller: ['$scope', '$filter', 'projects', '$translate', function ($scope, $filter, projects, $translate) {
        $scope.changeLanguage = function (key) {
          $translate.use(key);
        };
        $scope.projects = projects.query();
      }]
    };
  });
