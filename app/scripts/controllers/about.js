'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
  .controller('AboutCtrl', ['$scope', 'projects', 'project', '$filter',
    function ($scope, projects, project, $filter) {
      projects.query(function () {
      }).$promise.then(function (collection) {
        $scope.gridOptions.data = collection.map(function (p) {
          return {
            date: '2016',
            category: p.tag,
            title: p.name
          };
        });
      });

      $scope.gridOptions = {
        enableSorting: true,
        columnDefs: [
          {field: 'date', displayName: $filter('translate')('COLUMN_DATE'), enableColumnMenu: false},
          {field: 'category', displayName: $filter('translate')('COLUMN_CATEGORY'), enableColumnMenu: false},
          {field: 'title', displayName: $filter('translate')('COLUMN_TITLE'), enableColumnMenu: false}
        ]
      };

    }]);
