(function() {
angular.module('app')
  .controller('editCategory', function($scope, AppManager, GetCategory, $window) {
    $scope.category = GetCategory;
    $scope.editCategory = function(category){
      AppManager.editCategory($scope.category).then(function(){
          $window.history.back();
      })
    }
      $scope.back = function(){
        $window.history.back();
      }
});
})();
