describe('controllers', function() {
  var scope;

  // Mock unavailable modules
  angular.module('ngMessages', []);
  angular.module('eggtimer.constants', []);

  // load the controller's module
  beforeEach(module('eggtimer.controllers'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('CalendarCtrl', {$scope: scope, $ionicPopup: null, apiUrl: 'http://example.com'});
  }));

  it('should be able to create calendar without errors', function() {
  });

});
