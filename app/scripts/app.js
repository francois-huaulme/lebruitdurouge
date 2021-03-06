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
    'ngTouch',
    'akoenig.deckgrid',
    'sticky',
    'ui.bootstrap',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/home', {
        redirectTo: '/'
      })
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/projects/:projectId', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: '/languages/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('fr');
    $translateProvider.fallbackLanguage('fr')
    $translateProvider.useSanitizeValueStrategy('escaped');
  }]);
