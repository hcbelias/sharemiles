'use strict';
var en_I18N = {
  add_place: 'Add New Place',
  choose_destination: 'Choose your destination',
  management: 'Management',
  myapp: 'My App',
  places: 'Places',
  rides: 'Rides'
};

angular.module('ecomovaApp.I18N',[]);

angular.module('milesApp', [
  'milesApp.auth',
  'milesApp.admin',
  'milesApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ngMaterial',
  'ngMessages',
  'pascalprecht.translate',
  'ngMap'
])
  .config(function($urlRouterProvider, $locationProvider, $translateProvider, $mdThemingProvider) {

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    $translateProvider.translations('en', en_I18N);
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('green')
      .warnPalette('red');



  });
