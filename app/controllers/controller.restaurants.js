(function() {
  angular.module('app')
    .controller('restaurants', function($scope, AppManager, $location, GetRestaurants) {

      $scope.restaurants = GetRestaurants;

      var _length = $scope.restaurants.length
      var restaurants = $scope.restaurants;
      for (i = 0; i < _length; i++) {
        if (restaurants[i].isEnabled == 0) {
          restaurants[i].isEnabled = false

        } else if (restaurants[i].isEnabled == 1) {
          restaurants[i].isEnabled = true
        }

      }
      $scope.openRestaurant = function(id) {
        $location.url('/restaurants/' + id);
      }

      $scope.onChange = function(restaurant) {
        var flag = restaurant.isEnabled;
        $scope.message = flag;
        if (flag == true) {
          flag = 1;
          // console.log(flag)
        } else if (flag == false) {
          flag = 0;
          // console.log(flag)
        }
        AppManager.editRestaurantIsEnabled(restaurant)

      }

    });
})();
