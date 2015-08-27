'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:ProjectdetailsCtrl
 * @description
 * # ProjectdetailsCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
  .controller('ProjectDetailsCtrl', ['$scope', '$routeParams', 'project', '$splash', function ($scope, $routeParams, project, $splash) {
    // Id needed for translation
    $scope.projectId = $routeParams.projectId.toUpperCase();
    // Loads slides for column display
    $scope.project = project.get({projectId: $routeParams.projectId}, function (project) {
      var allSlides = [];
      for (var i = 0; i < project.imagesUrl.length; i++) {
        allSlides.push({imageUrl: project.imagesUrl[i]});
      }
      $scope.slides = allSlides;
    });
    $scope.open = function (index) {
      $scope.modalInstance = $splash.open({
        items: $scope.slides,
        index: index
      });
    };
  }]);
