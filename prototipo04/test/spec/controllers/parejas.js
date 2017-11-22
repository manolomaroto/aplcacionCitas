'use strict';

describe('Controller: ParejasCtrl', function () {

  // load the controller's module
  beforeEach(module('psicologiaMirafloresApp'));

  var ParejasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParejasCtrl = $controller('ParejasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ParejasCtrl.awesomeThings.length).toBe(3);
  });
});
