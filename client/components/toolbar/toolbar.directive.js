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
      },
      link: function (scope, element, attrs) {
        var pathList = state.current.url === "/" ? [] : state.current.url.split('/'),
          index;
        if(pathList.length > 1 && pathList[0] === ""){
          //clearing emtpy string
          pathList.shift();
        }
        scope.appName = translate.instant('MyApp');
        scope.searchOpen = false;
        scope.isLoggedIn = auth.isLoggedIn();
        scope.mdSidenav = mdSidenav;
        scope.pathList = pathList;
        scope.showSearch = scope.isLoggedIn && attrs.search;
        scope.showAddPlace = scope.isLoggedIn && attrs.place;
        scope.showAddRide = scope.isLoggedIn && attrs.ride;
        scope.showLogin = !scope.isLoggedIn;
        scope.showLogout = scope.isLoggedIn;
        scope.title = "sdsa";
        scope.toggleSearch = function(element) {
          scope.searchOpen = !scope.searchOpen;
        };
        scope.toggleSidenav = function(menuId) {
          scope.mdSidenav(menuId).toggle();
        };


      }
    };
  });
