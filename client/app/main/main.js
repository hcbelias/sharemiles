'use strict';

angular.module('milesApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>',
        authenticate: true
      });
  });
