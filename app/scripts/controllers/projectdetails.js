'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:ProjectdetailsCtrl
 * @description
 * # ProjectdetailsCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
  .controller('ProjectDetailsCtrl', function($scope, $routeParams, project) {
    $scope.project = project.get({projectId: $routeParams.projectId}, function(project) {
        $scope.slides = project.imagesUrl;
    });
  });
