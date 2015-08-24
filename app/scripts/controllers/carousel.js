'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:CarouselCtrl
 * @description
 * # CarouselCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
  .controller('CarouselCtrl', function ($scope, $modalInstance, slides) {
    $scope.items = slides;
    $scope.ok = function () {
      $modalInstance.close();
    };
  });
