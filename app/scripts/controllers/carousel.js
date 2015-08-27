'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:CarouselCtrl
 * @description
 * # CarouselCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
  .controller('CarouselCtrl', function ($scope, $modalInstance, $timeout) {
    var INTERVAL = 3000;

    function setCurrentSlideIndex(index) {
      $scope.currentIndex = index;
    }

    function isCurrentSlideIndex(index) {
      return $scope.currentIndex === index;
    }

    function nextSlide() {
      $scope.currentIndex = ($scope.currentIndex < $scope.items.length - 1) ? ++$scope.currentIndex : 0;
      $timeout(nextSlide, INTERVAL);
    }

    function loadSlides() {
      $timeout(nextSlide, INTERVAL);
    }

    $scope.currentIndex = $scope.index;
    $scope.setCurrentSlideIndex = setCurrentSlideIndex;
    $scope.isCurrentSlideIndex = isCurrentSlideIndex;
    $scope.ok = function ok() {
      $modalInstance.close();
    };

    //
    loadSlides();
  });
