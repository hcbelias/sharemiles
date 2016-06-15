'use strict';

describe('Directive: searchMap', function () {

  // load the directive's module and view
  beforeEach(module('milesApp'));
  beforeEach(module('components/search-map/search-map.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-map></search-map>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the searchMap directive');
  }));
});
