'use strict';

describe('Component: PlaceComponent', function () {

  // load the controller's module
  beforeEach(module('milesApp'));

  var PlaceComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PlaceComponent = $componentController('PlaceComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
