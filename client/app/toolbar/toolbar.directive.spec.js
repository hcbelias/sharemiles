'use strict';

describe('Directive: toolbar', function () {

  // load the directive's module and view
  beforeEach(module('milesApp'));
  beforeEach(module('app/toolbar/toolbar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<toolbar></toolbar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the toolbar directive');
  }));
});
