(function() {
  angular.module('app')
    .controller('login', function($scope, $location, auth, $localStorage) {
      $scope.login = function() {
        if ($scope.username == "admin" && $scope.password == "admin") {
          auth.setToken('admin')
            $location.path('/restaurants')
        }
      }
    });
})();
