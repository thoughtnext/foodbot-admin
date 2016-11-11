(function() {
  angular.module('app')
    .config(function($routeProvider, $locationProvider, $mdThemingProvider) {
      $routeProvider
        .when('/', {
          controller: 'login',
          templateUrl: './app/templates/login.html'
        })
        .when('/restaurants', {
          controller: 'restaurants',
          templateUrl: './app/templates/restaurants.html',
          resolve: {
            GetRestaurants: ['AppManager', function(AppManager) {
              return AppManager.getRestaurants();
            }]
          }
        })
        .when('/restaurants/:id', {
          controller: 'restaurantDetails',
          templateUrl: '../app/templates/restaurantDetails.html',
          resolve: {
            GetCategories: ['AppManager', '$route', function(AppManager, $route) {
              return AppManager.getCategoriesForRestaurant($route.current.params.id);
            }]
          }
        })
        .when('/new/restaurant', {
          controller: 'newRestaurant',
          templateUrl: '../app/templates/newRestaurant.html'
        })
        .when('/edit/restaurants/:id', {
          controller: 'editRestaurant',
          templateUrl: '../../app/templates/editRestaurant.html',
          resolve: {
            GetRestaurantDetails: ['AppManager', '$route', function(AppManager, $route) {
              return AppManager.getRestaurantDetails($route.current.params.id);
            }]
          }
        })
        .when('/categories/:id/', {
          controller: 'categoryDetails',
          templateUrl: '../../app/templates/categoryDetails.html',
          resolve: {
            GetMenuItems: ['AppManager', '$route', function(AppManager, $route) {
              return AppManager.getMenuItems($route.current.params.id);
            }]
          }
        })
        .when('/edit/categories/:categoryId/', {
          controller: 'editCategory',
          templateUrl: '../../../app/templates/editCategory.html',
          resolve: {
            GetCategory: ['AppManager', '$route', function(AppManager, $route) {
              return AppManager.getCategoryDetails($route.current.params.categoryId);
            }]
          }
        })
        .when('/new/restaurants/:id/category', {
          controller: 'newCategory',
          templateUrl: '../../../app/templates/newCategory.html'
        })
        .when('/edit/menuItems/:menuItemId/', {
          controller: 'editMenuItem',
          templateUrl: '../../../app/templates/editMenuItem.html',
          resolve: {
            GetMenuItem: ['AppManager', '$route', function(AppManager, $route) {
              return AppManager.getMenuItemDetails($route.current.params.menuItemId);
            }]
          }
        })
        .when('/new/categories/:id/menuItem', {
          controller: 'newMenuItem',
          templateUrl: '../../../app/templates/newMenuItem.html'
        })

      // .otherwise({ redirectTo: "/restaurants" })

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      })
    })
    .run(function($rootScope, $location, auth) {
      $rootScope.$on("$routeChangeStart", function(event, next, current) {
        if (!auth.isLoggedIn()) {
          $location.path('/');
        } else {
          var _path = $location.path();
          if (_path == '/') $location.path('/restaurants');
        }
      });
    });
})();
