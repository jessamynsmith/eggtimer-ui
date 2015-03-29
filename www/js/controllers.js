angular.module('eggtimer.controllers', [])

.controller('CalendarCtrl', function($scope, $ionicPopup) {
  $scope.$on("$ionicView.loaded", function () {
    initializeCalendar($ionicPopup, 'http://10.10.1.117:5000/');
  });
})

.controller('StatisticsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
