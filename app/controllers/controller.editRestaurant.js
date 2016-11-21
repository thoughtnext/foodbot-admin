(function() {
  angular.module('app')
    .controller('editRestaurant', function($scope, AppManager, GetRestaurantDetails, $location, $window ) {
      $scope.restaurant = GetRestaurantDetails;
      $scope.editRestaurant = function(restaurant) {
        AppManager.editRestaurant($scope.restaurant).then(function() {
          $window.history.back();
        })
      }
      $scope.uploadRestaurantImage = function() {
        var file = $scope.restaurant.image;
        return AppManager.uploadRestaurantImage(file)
          .then(function(file) {
            $scope.restaurant.image = file.location
            $scope.editRestaurant($scope.restaurant)
          })
      };
      $scope.back = function(){
        $window.history.back();
      }
    });
})();
