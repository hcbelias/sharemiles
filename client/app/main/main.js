'use strict';

angular.module('milesApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/rides',
        template: '<main></main>',
        authenticate: true
      });
  });
