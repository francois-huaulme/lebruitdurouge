'use strict';

/**
 * @ngdoc directive
 * @name lebruitdurougeApp.directive:bgImage
 * @description
 * # bgImage
 */
angular.module('lebruitdurougeApp')
  .directive('bgImage', function ($window, $timeout) {
    return function (scope, element, attrs) {
      var resizeBG = function () {
        var bgWidth = element.width();
        var bgHeight = element.height();

        var winWidth = $window.innerWidth;
        var winHeight = $window.innerHeight;

        var widthRatio = winWidth / bgWidth;
        var heightRatio = winHeight / bgHeight;

        var widthDiff = heightRatio * bgWidth;
        var heightDiff = widthRatio * bgHeight;

        if (heightDiff > winHeight) {
          element.css({
            width: winWidth + 'px',
            height: heightDiff + 'px'
          });
        } else {
          element.css({
            width: widthDiff + 'px',
            height: winHeight + 'px'
          });
        }
      };

      var windowElement = angular.element($window);
      windowElement.resize(resizeBG);

      element.bind('load', function () {
        resizeBG();
      });
    }
  });
