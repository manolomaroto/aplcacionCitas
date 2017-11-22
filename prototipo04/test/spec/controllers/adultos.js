'use strict';

describe('Controller: AdultosCtrl', function () {

  // load the controller's module
  beforeEach(module('psicologiaMirafloresApp'));

  var AdultosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdultosCtrl = $controller('AdultosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdultosCtrl.awesomeThings.length).toBe(3);
  });
});
