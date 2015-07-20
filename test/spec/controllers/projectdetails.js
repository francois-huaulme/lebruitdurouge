'use strict';

describe('Controller: ProjectdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('lebruitdurougeApp'));

  var ProjectdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectdetailsCtrl = $controller('ProjectdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
