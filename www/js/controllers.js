angular.module('eggtimer.controllers', ['eggtimer.constants'])

.controller('CalendarCtrl', function($scope, $ionicPopup, apiUrl) {
  $scope.$on("$ionicView.loaded", function () {
    initializeCalendar($ionicPopup, apiUrl);
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
