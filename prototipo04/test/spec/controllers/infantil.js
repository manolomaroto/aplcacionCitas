'use strict';

describe('Controller: InfantilCtrl', function () {

  // load the controller's module
  beforeEach(module('psicologiaMirafloresApp'));

  var InfantilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfantilCtrl = $controller('InfantilCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InfantilCtrl.awesomeThings.length).toBe(3);
  });
});
