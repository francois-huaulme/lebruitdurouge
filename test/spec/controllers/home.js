'use strict';

describe('Controller: HomectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('lebruitdurougeApp'));

  var HomectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomectrlCtrl = $controller('HomectrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
