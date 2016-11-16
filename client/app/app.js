'use strict';

angular.module('milesApp', [
  'milesApp.auth',
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
  .config(function($urlRouterProvider, $locationProvider, $translateProvider, $mdThemingProvider, appConfig,  $httpProvider) {

    $urlRouterProvider.otherwise('/rides');

    $locationProvider.html5Mode(true);

    $translateProvider.translations('en', appConfig.i18n.en);
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('yellow')
      .warnPalette('red')
      .backgroundPalette('blue-grey');

    //$mdIconProvider
      //.iconSet('core', 'img/icons/sets/core-icons.svg',24)
      //.icon('social:cake', 'img/icons/cake.svg',24);

  });
