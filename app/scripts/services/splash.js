'use strict';

/**
 * @ngdoc service
 * @name lebruitdurougeApp.splash
 * @description
 * # splash
 * Service in the lebruitdurougeApp.
 */
angular.module('ui.splash', ['ui.bootstrap'])
  .service('$splash', [
    '$modal',
    '$rootScope',
    function($modal, $rootScope) {
      return {
        open: function (attrs, opts) {
          var scope = $rootScope.$new();
          angular.extend(scope, attrs);
          opts = angular.extend(opts || {}, {
            animation: true,
            controller: 'CarouselCtrl',
            backdrop: false,
            size: 'fs',
            scope: scope,
            templateUrl: 'templates/content.html',
            windowClass: "modal-fs",
            windowTemplateUrl: 'templates/index.html'
          });
          return $modal.open(opts);
        }
      };
    }
  ]);
