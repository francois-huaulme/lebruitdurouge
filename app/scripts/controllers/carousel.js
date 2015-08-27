'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:CarouselCtrl
 * @description
 * # CarouselCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
  .controller('CarouselCtrl', function ($scope, $modalInstance) {
    function setCurrentSlideIndex(index) {
      $scope.currentIndex = index;
    }

    function isCurrentSlideIndex(index) {
      return $scope.currentIndex === index;
    }

    function previousSlide() {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.items.length - 1;
    }

    function nextSlide() {
      $scope.currentIndex = ($scope.currentIndex < $scope.items.length - 1) ? ++$scope.currentIndex : 0;
    }

    function loadSlides() {
      nextSlide();
    }

    $scope.currentIndex = $scope.index;
    $scope.setCurrentSlideIndex = setCurrentSlideIndex;
    $scope.isCurrentSlideIndex = isCurrentSlideIndex;
    $scope.previousSlide = previousSlide;
    $scope.nextSlide = nextSlide;
    $scope.ok = function ok() {
      $modalInstance.close();
    };

    //
    loadSlides();
  });
