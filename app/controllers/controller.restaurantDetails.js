(function() {
  angular.module('app')
    .controller('restaurantDetails', function($scope, AppManager, $route, $location, $mdDialog, GetCategories, $window) {
      $scope.categories = GetCategories;
      $scope.restaurantID = $route.current.params.id;
      $scope.openCategory = function(id) {
        $location.url('/categories/' + id);

      }
      $scope.confirmDelete = function(ev, categoryId) {
        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete this category?')
          .clickOutsideToClose(true)
          .textContent('This Category might contain some menu items. This will permanently delete the Category')
          .ariaLabel('confirm deletion')
          .targetEvent(ev)
          .ok('Yes')
          .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
          $scope.deleteCategory(categoryId);
        }, function() {
          console.log('Cancelled')
        });
      };

      $scope.deleteCategory = function(categoryId) {
        AppManager.removeCategory(categoryId).then(function() {
          console.log('deleted successfully')
          $window.history.back();
        })
      }



    });
})();
