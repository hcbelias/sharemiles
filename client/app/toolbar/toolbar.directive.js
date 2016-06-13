'use strict';

angular.module('milesApp')
  .directive('toolbar', function (Auth, $mdSidenav) {
    let auth = Auth,
      mdSidenav = $mdSidenav;
    return {
      templateUrl: 'app/toolbar/toolbar.html',
      restrict: 'E',
      scope:{
        title: '@',
        place: '@',
        search: '@',
      },
      link: function (scope, element, attrs) {
        scope.searchOpen = false;
        scope.isLoggedIn = auth.isLoggedIn();
        scope.mdSidenav = mdSidenav;
        scope.title = attrs.title;
        scope.showSearch = scope.isLoggedIn && attrs.search;
        scope.showAddPlace = scope.isLoggedIn && attrs.place;
        scope.showLogin = !scope.isLoggedIn;
        scope.showLogout = scope.isLoggedIn;

        scope.toggleSearch = function(element) {
          scope.searchOpen = !scope.searchOpen;
        };
        scope.toggleSidenav = function(menuId) {
          scope.mdSidenav(menuId).toggle();
        };
      }
    };
  });
