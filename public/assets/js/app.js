'use strict';

angular.module('app', ['ui.bootstrap', 'ui.bootstrap.carousel', 'ui.router', 'ui-navbar'])
  
  function carouselCtrl($scope){
    $scope.carInterval = 3000;
    $scope.slides = [
      {
        image: 'http://blog.casro.net/wp-content/uploads/2016/02/tech.jpg'
      },
      {
        image: 'http://stockfresh.com/files/s/scornejor/m/94/671341_stock-photo-eye-technology-background.jpg'
      },
      {
        image: 'https://thumbs.dreamstime.com/t/businessman-pressing-modern-technology-panel-finger-print-r-reader-61710140.jpg'
      },
      {
        image: 'http://www.redorbit.com/media/uploads/2014/12/149480786.jpg'
      }  
    ];
  }

  config(function($stateProvider, $urlRouterProvider) {

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

  .controller('NavigationController', function ($scope) {

    $scope.tree = [{
      name: "States",
      link: "#",
      subtree: [{
          name: "state 1",
          link: "state1"
      },{
          name: "state 2",
          link: "state2",
          subtree: [{
              name: "state unknown",
              link: "state unknown 2",
          }]    
      }]
    },{
      name: "No states",
      link: "#",
      subtree: [{
          name: "no state connected",
          link: "#"
      }]
    },{
      name: "divider",
      link: "#"

    },{
      name: "State has not been set up",
      link: "#"
    },{
      name: "divider",
      link: "#"
    },{
      name: "Again no state set up",
      link: "#"
    }];
  });        
