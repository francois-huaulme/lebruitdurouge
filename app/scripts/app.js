'use strict';

/**
 * @ngdoc overview
 * @name lebruitdurougeApp
 * @description
 * # lebruitdurougeApp
 *
 * Main module of the application.
 */
angular
  .module('lebruitdurougeApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html', 
        controller: 'HomeCtrl'
      })
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/projects/:projectId', {
        templateUrl: 'partials/projects.html', 
        controller: 'ProjectDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
