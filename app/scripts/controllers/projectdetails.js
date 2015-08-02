'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:ProjectdetailsCtrl
 * @description
 * # ProjectdetailsCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
  .controller('ProjectDetailsCtrl', function ($scope, $routeParams, project, $modal) {
    // Id needed for translation
    $scope.projectId = $routeParams.projectId.toUpperCase();
    // Loads slides for column display
    $scope.project = project.get({projectId: $routeParams.projectId}, function (project) {
      var allSlides = [];
      for (var i = 0; i < project.imagesUrl.length; i++) {
        allSlides.push({imageUrl: project.imagesUrl[i]});
      }
      $scope.images = allSlides;
      $scope.slides = allSlides.slice();
    });
    $scope.open = function () {
      $scope.modalInstance = $modal.open({
        animation: true,
        templateUrl: 'templates/carousel.html',
        size: 'lg',
        scope: $scope
      })
    };
    // Carousel (close button)
    $scope.ok = function () {
      $scope.modalInstance.close();
    };
  });
