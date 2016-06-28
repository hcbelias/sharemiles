'use strict';

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
  .config(function($urlRouterProvider, $locationProvider, $translateProvider, $mdThemingProvider, appConfig,  $httpProvider) {

    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $urlRouterProvider.otherwise('/rides');

    $locationProvider.html5Mode(true);

    $translateProvider.translations('en', appConfig.i18n.en);
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('green')
      .warnPalette('red');

    //$mdIconProvider
      //.iconSet('core', 'img/icons/sets/core-icons.svg',24)
      //.icon('social:cake', 'img/icons/cake.svg',24);

  });
