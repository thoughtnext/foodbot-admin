(function() {
  angular.module('app')
    .controller('editRestaurant', function($scope, AppManager, GetRestaurantDetails, $location, $window ) {
      $scope.restaurant = GetRestaurantDetails;
      $scope.editRestaurant = function(restaurant) {
        AppManager.editRestaurant($scope.restaurant).then(function() {
          $window.history.back();
        })
      }
      $scope.uploadRestaurantImage = function(image) {
        return AppManager.uploadRestaurantImage(image)
          .then(function(image) {
            if(image!=undefined){
              var img = image.location
              console.log(img)
              $scope.restaurant.image = img;
            }
            else {
            }
            $scope.editRestaurant($scope.restaurant)
          })
      };
      $scope.back = function(){
        $window.history.back();
      }
    });
})();
