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
        var pathList = state.current.url === '/' ? [] : state.current.url.split('/');
        if(pathList.length > 1 && pathList[0] === ''){
          //clearing emtpy string
          pathList.shift();
        }
        scope.appName = translate.instant('MyApp');
        scope.searchOpen = false;
        
        auth.getCurrentUser().$promise.then(data=>{
          debugger;
        });
        scope.mdSidenav = mdSidenav;
        scope.pathList = pathList;
        scope.showSearch = scope.isLoggedIn && true;
        scope.showAddPlace = scope.isLoggedIn && true;
        scope.showAddRide = scope.isLoggedIn && true;
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
