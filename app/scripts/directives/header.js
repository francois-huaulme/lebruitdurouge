'use strict';

/**
 * @ngdoc directive
 * @name lebruitdurougeApp.directive:header
 * @description
 * # header
 */
const enforcedTagOrder = ["new", "hom", "com", "exb", "pro", "col"];

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

        $scope.tags = enforcedTagOrder;
        var projects = projects.query();
        projects.$promise.then(function (allProjects) {
          var unique = {};
          for(var i = 0; i < allProjects.length; i++) {
            var projectTags = allProjects[i].tags;
            for(var j = 0; j < projectTags.length; j++) {
              var currentProjectTag = projectTags[j];
              if(enforcedTagOrder.indexOf(currentProjectTag) < 0 && unique[currentProjectTag] === undefined) {
                $scope.tags.push(currentProjectTag);
                unique[currentProjectTag] = "";
              }
            }
          }
        })
      }]
    };
  });
