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

        $scope.tags = [];
        var projects = projects.query();
        projects.$promise.then(function (allProjects) {
          var unique = {};
          for(var i = 0; i < allProjects.length; i++) {
            var projectTags = allProjects[i].tags;
            for(var j = 0; j < projectTags.length; j++) {
              var currentProjectTag = projectTags[j];
              if(unique[currentProjectTag] === undefined) {
                $scope.tags.push(currentProjectTag);
                unique[currentProjectTag] = "";
              }
            }
          }
        })
      }]
    };
  });
