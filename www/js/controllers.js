angular.module('eggtimer.controllers', ['ngMessages', 'eggtimer.constants'])

  .controller('LoginCtrl', function($scope, $timeout, User, $state) {
    $scope.params = {};

    $scope.doLogin = function(email, password) {
      if (!window.localStorage.token) {
        User.login(email, password)
          .then(function() {
            if (!window.localStorage.token) {
              $scope.showError = true;
              $timeout(function() {
                $scope.showError = false;
              }, 5000);
            }
            $state.go('tab.calendar');
          });
      }
    };
  })

  .controller('CalendarCtrl', function($scope, $ionicPopup, apiUrl) {
    $scope.$on("$ionicView.loaded", function() {
      initializeCalendar($ionicPopup, apiUrl);
    });
  })

  .controller('StatisticsCtrl', function($scope) {
  })

  .controller('AccountCtrl', function($scope) {
  });
