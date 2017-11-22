'use strict';

describe('Controller: DondeestamosCtrl', function () {

  // load the controller's module
  beforeEach(module('psicologiaMirafloresApp'));

  var DondeestamosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DondeestamosCtrl = $controller('DondeestamosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DondeestamosCtrl.awesomeThings.length).toBe(3);
  });
});
