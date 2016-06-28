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
        place: '@',
        search: '@',
        ride: '@',
      },
      link: function (scope) {
        var pathList = state.current.url === '/' ? [] : state.current.url.split('/');
        if(pathList.length > 1 && pathList[0] === ''){
          //clearing emtpy string
          pathList.shift();
        }
        scope.appName = translate.instant('MyApp');
        scope.searchOpen = false;
        scope.isLoggedIn = auth.isLoggedIn();
        scope.mdSidenav = mdSidenav;
        scope.pathList = pathList;
        scope.showSearch = scope.isLoggedIn && scope.search;
        scope.showAddPlace = scope.isLoggedIn && scope.place;
        scope.showAddRide = scope.isLoggedIn && scope.ride;
        scope.showLogin = !scope.isLoggedIn;
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
