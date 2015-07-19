'use strict';
/* Controllers */
var controllers = angular.module('myApp.controllers', ['ngTouch']);
// ===== Home ===== 
controllers.controller('HomeCtrl', function($scope, $http, Projects) {
    $scope.projects = Projects.query();
    $scope.tags = {};
});
// ===== About ===== 
controllers.controller('AboutCtrl', function($scope) {
});
// ===== Project details ===== 
controllers.controller('ProjectDetailsCtrl', function($scope, $routeParams, Project) {
    $scope.project = Project.get({projectId: $routeParams.projectId}, function(project) {
        $scope.slides = project.imagesUrl;
    });
});
