'use strict';

/**
 * @ngdoc service
 * @name lebruitdurougeApp.projects
 * @description
 * # projects
 * Service in the lebruitdurougeApp.
 */
angular.module('lebruitdurougeApp')
  .service('projects', ['$resource',
    function ($resource) {
      return $resource('data/projects.json', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: true
        }
      });
    }]);
