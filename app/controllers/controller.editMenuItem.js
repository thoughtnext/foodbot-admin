(function() {
  angular.module('app')
    .controller('editMenuItem', function($scope, AppManager, GetMenuItem, $window) {
      $scope.menuItem = GetMenuItem;
      $scope.editMenuItem = function(menuItem) {
        AppManager.editMenuItem($scope.menuItem).then(function() {
          $window.history.back();
        })
      }
      $scope.uploadMenuItemImage = function(image) {
        return AppManager.uploadMenuItemImage(image)
          .then(function(image) {
            if(image!=undefined){
              var img = image.location
              console.log(img)
              $scope.menuItem.image = img;
            }
            else {
            }
            $scope.editMenuItem($scope.menuItem)
          })
      }
      $scope.back = function(){
        $window.history.back();
      }
    });
})();



          