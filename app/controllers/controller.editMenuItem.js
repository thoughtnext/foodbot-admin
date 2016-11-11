(function() {
  angular.module('app')
    .controller('editMenuItem', function($scope, AppManager, GetMenuItem, $window) {
      $scope.menuItem = GetMenuItem;
      $scope.editMenuItem = function(menuItem) {
        AppManager.editMenuItem($scope.menuItem).then(function() {
          $window.history.back();
        })
      }
      $scope.uploadMenuItemImage = function() {
        var file = $scope.menuItem.image;
        return AppManager.uploadMenuItemImage(file)
          .then(function(file) {
            $scope.menuItem.image = file.filename
            $scope.editMenuItem($scope.menuItem)
          })
      }
      $scope.back = function(){
        $window.history.back();
      }
    });
})();
