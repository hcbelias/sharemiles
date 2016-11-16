'use strict';

angular.module('milesApp')
  .directive('toolbar', function (Auth, $mdSidenav, $state, $translate) {
    let auth = Auth,
      mdSidenav = $mdSidenav,
      state  = $state,
      translate = $translate;
    return {
      templateUrl: 'components/toolbar/toolbar.html',
      restrict: 'E',
      scope:{
      },
      link: function (scope) {
        scope.appName = translate.instant('MyApp');
        scope.searchOpen = false;
        scope.mdSidenav = mdSidenav;
        scope.showLogout = scope.isLoggedIn;
        scope.toggleSearch = function() {
          scope.searchOpen = !scope.searchOpen;
        };
        scope.toggleSidenav = function(menuId) {
          scope.mdSidenav(menuId).toggle();
        };
      }
    };
  });
