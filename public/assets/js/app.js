'use strict';

angular.module('App', ['ui.bootstrap', 'ui.router', 'ui-navbar'])

  .config(function($stateProvider, $urlRouterProvider)) {

    //for any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");

    //set up states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "partials/home.html"
      })
      .state('state1', {
        url: "/state1",
        templateUrl: "partials/state1.html"
      })
      .state('state2', {
        url: "/state2",
        templateUrl: "partials/state2.html"
      });
  })
