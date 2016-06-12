'use strict';

angular.module('milesApp.auth', [
  'milesApp.constants',
  'milesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
