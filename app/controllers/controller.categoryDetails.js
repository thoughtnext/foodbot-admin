(function() {
  angular.module('app')
    .controller('categoryDetails', function($scope, AppManager, $route, $location, $mdDialog, GetMenuItems, $window) {
      $scope.categoryId = $route.current.params.id;
      $scope.menuItems = GetMenuItems;
      $scope.confirmDelete = function(ev, menuItemId) {
        var confirm = $mdDialog.confirm()
          .title('Delete Menu Item')
          .clickOutsideToClose(true)
          .textContent('This will permanently delete the Menu Item. Are you sure you want to delete this Menu Item ?')
          .ariaLabel('confirm deletion')
          .targetEvent(ev)
          .ok('Yes')
          .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
          $scope.deleteMenuItem(menuItemId);
        }, function() {});
      };

      $scope.deleteMenuItem = function(menuItemId) {
        AppManager.removeMenuItem(menuItemId).then(function() {
          $window.history.back();
        })
      }

    });
})();
