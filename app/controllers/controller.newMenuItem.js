(function() {
  angular.module('app')
    .controller('newMenuItem', function($scope, AppManager, $location, $route, $window) {
      $scope.menuItem = {};
      $scope.menuItem.category_id = $route.current.params.id;
      $scope.addMenuItem = function(menuItem) {
        AppManager.createMenuItem(menuItem).then(function() {
          $window.history.back();

        })
      }
      $scope.uploadMenuItemImage = function() {
        var file = $scope.menuItem.image;
        return AppManager.uploadMenuItemImage(file)
          .then(function(file) {
            $scope.menuItem.image = file.location
            $scope.addMenuItem($scope.menuItem)
          })
      }
      $scope.back = function(){
        $window.history.back();
      }
    });
})();

