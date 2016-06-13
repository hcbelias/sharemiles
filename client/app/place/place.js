'use strict';

angular.module('milesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('place', {
        url: '/place',
        template: '<place></place>',
        authenticate: true,
      });
  });
