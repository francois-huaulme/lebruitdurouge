'use strict';
// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.projectServices'
]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
  $routeProvider.when('/projects/:projectId', {templateUrl: 'partials/projects.html', controller: 'ProjectDetailsCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
app.filter('unique', function() {
    return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});
app.filter('uniqueInList', function() {
    return function(input, values) {
        var filteredList = [];
        for(var i = 0; i < input.length; i++) {
            if(values[input[i].tag] || values[input[i].tag] == undefined) {
                filteredList.push(input[i]);
            }
        }
        return filteredList;
    };
});
app.filter('shuffle', function() {
    return function(input) {
        for(var j, x, i = input.length; i; j = Math.floor(Math.random() * i), x = input[--i], input[i] = input[j], input[j] = x);
        return input;
    };
});
