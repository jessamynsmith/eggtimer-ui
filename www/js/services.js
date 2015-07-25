angular.module('eggtimer.services', ['eggtimer.constants'])

  .factory('User', function($http, $q, apiUrl) {
    return {
      checkAuthenticated: function() {
        if (!window.localStorage.token) {
          console.log('not authenticated');
          return $q.reject('not_authenticated');
        }
        console.log('is authenticated');
        return $q.when(window.localStorage.token);
      },
      login: function(email, password) {
        var handleSuccess = function(result) {
          window.localStorage.token = result.data.token;
        };
        var handleError = function(error) {
          console.log(error);
        };
        var request = $http({
          method: "post",
          url: apiUrl + 'api/v2/authenticate/',
          data: {
            email: email,
            password: password
          }
        });
        return ( request.then(handleSuccess, handleError) );
      }
    };
  });
