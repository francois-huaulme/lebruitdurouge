'use strict';

/**
 * @ngdoc function
 * @name lebruitdurougeApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the lebruitdurougeApp
 */
angular.module('lebruitdurougeApp')
  .controller('HeaderCtrl', function ($scope, projects) {
    $scope.header = {name: "header.html", url: "views/header.html"};
    $scope.projects = projects.query();
    $scope.tags = {};
  });
