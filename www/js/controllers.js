angular.module('eggtimer.controllers', ['ngMessages', 'eggtimer.constants'])

  .controller('LoginCtrl', function($scope, User, $state) {
    $scope.params = {};

    $scope.doLogin = function(email, password) {
      if (!window.localStorage.token) {
        User.login(email, password)
          .then(function() {
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

  .controller('StatisticsCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
