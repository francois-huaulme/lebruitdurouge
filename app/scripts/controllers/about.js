'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
    .controller('AboutCtrl', ['$scope', 'projects', 'project',
    function ($scope, projects) {
            $scope.projects = projects.query(function () {});


    }]);
