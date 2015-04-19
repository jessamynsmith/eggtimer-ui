// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'eggtimer' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'eggtimer.services' is found in services.js
// 'eggtimer.controllers' is found in controllers.js
angular.module('eggtimer', ['ionic', 'eggtimer.controllers', 'eggtimer.services'])

  .run(function($ionicPlatform, $rootScope, $state) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    $rootScope.$on('$stateChangeError', function(e, to, toP, from, fromP, error) {
      e.preventDefault();
      if (error === 'not_authenticated') {
        $state.go('login');
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('login', {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
      })

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html",
        resolve: {
          user: ['User', function(User) {
            return User.checkAuthenticated();
          }]
        }
      })

      // Each tab has its own nav history stack:

      .state('tab.calendar', {
        url: '/calendar',
        views: {
          'tab-calendar': {
            templateUrl: 'templates/tab-calendar.html',
            controller: 'CalendarCtrl'
          }
        }
      })

      .state('tab.statistics', {
        url: '/statistics',
        views: {
          'tab-statistics': {
            templateUrl: 'templates/tab-statistics.html',
            controller: 'StatisticsCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/statistics/:chatId',
        views: {
          'tab-statistics': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/calendar');

  });
