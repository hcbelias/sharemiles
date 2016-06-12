'use strict';

angular.module('milesApp')
  .directive('toolbar', function (Auth, $mdSidenav) {
    let auth = Auth,
      mdSidenav = $mdSidenav;
    return {
      templateUrl: 'app/toolbar/toolbar.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.showSearch = false;
        scope.isLoggedIn = auth.isLoggedIn;
        scope.mdSidenav = mdSidenav;
        scope.title = attrs.title;
        scope.toggleSearch = function(element) {
          scope.showSearch = !scope.showSearch;
        };

        scope.toggleSidenav = function(menuId) {
          scope.mdSidenav(menuId).toggle();
        };


      }
    };
  });
