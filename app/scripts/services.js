'use strict';
/* Services */
angular.module('myApp.services', []).value('version', '0.1');
var projectServices = angular.module('myApp.projectServices', ['ngResource']);
projectServices.factory('Project', ['$resource',
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
projectServices.factory('Projects', ['$resource',
  function ($resource) {
        return $resource('data/projects.json', {}, {
            query: {
                method: 'GET',
                params: {},
                isArray: true
            }
        });
  }]);
