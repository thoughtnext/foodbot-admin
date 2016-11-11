(function() {
  angular.module('app')
    .controller('newCategory', function($scope, AppManager, $location, $route, $window) {
      $scope.category = {};
      $scope.category.restaurant_id = $route.current.params.id;
      $scope.addCategory = function(category) {
        AppManager.createCategory(category).then(function() {
          $window.history.back();
        })
      }
    });
})();
