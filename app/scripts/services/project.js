'use strict';

/**
 * @ngdoc service
 * @name lebruitdurougeApp.project
 * @description
 * # project
 * Service in the lebruitdurougeApp.
 */
angular.module('lebruitdurougeApp')
  .service('project', ['$resource',
  function ($resource) {
        return $resource('data/:projectId.json', {}, {
            query: {
                method: 'GET',
                params: {
                    projectId: ''
                },
                isArray: false
            }
        });
  }]);
