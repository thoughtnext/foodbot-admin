(function() {
  angular.module('app')
    .controller('newRestaurant', function($scope, AppManager, $location, $window) {
      $scope.restaurant = {};
      $scope.addRestaurant = function(restaurant) {
        AppManager.createRestaurant(restaurant).then(function() {
          $window.history.back();

        })

      }
      $scope.uploadRestaurantImage = function() {
        var file = $scope.restaurant.image;
        return AppManager.uploadRestaurantImage(file)
          .then(function(file) {
            $scope.restaurant.image = file.filename
            $scope.addRestaurant($scope.restaurant)
          })
      }
      $scope.back = function() {
        $window.history.back();
      }
    });
})();
