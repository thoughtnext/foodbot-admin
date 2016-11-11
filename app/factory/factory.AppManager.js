(function() {
  var app = angular.module('app');
  app.factory('AppManager', function($q, $http, $log) {
    var baseUrl = 'http://localhost:8445/'
      // var baseUrl = 'http://192.168.1.4:8445/'
    return {
      getRestaurants: function() {
        var deferred = $q.defer();
        $http.get(baseUrl + 'restaurants')
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      getRestaurantDetails: function(restaurantId) {
        var deferred = $q.defer();
        $http.get(baseUrl + 'restaurants/' + restaurantId)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data[0]);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      createRestaurant: function(restaurant) {
        var deferred = $q.defer();
        $log.debug(restaurant);
        $http.post(baseUrl + 'new/restaurant/', restaurant)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      editRestaurant: function(restaurant) {
        $log.debug(restaurant)
        var deferred = $q.defer();
        $log.debug(restaurant);
        $http.put(baseUrl + 'edit/restaurants/' + restaurant.id, restaurant)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      editRestaurantIsEnabled: function(restaurant) {
        $log.debug(restaurant)
          //restaurant.isEnabled=0;
        var deferred = $q.defer();
        $log.debug(restaurant);
        $http.put(baseUrl + 'edit/isenabled/restaurants/' + restaurant.id, restaurant)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      getCategoriesForRestaurant: function(restaurantId) {
        var deferred = $q.defer();
        $http.get(baseUrl + 'restaurants/' + restaurantId + '/categories')
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      getCategoryDetails: function(categoryId) {
        var deferred = $q.defer();
        $http.get(baseUrl + 'categories/' + categoryId)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data[0]);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      getMenuItems: function(categoryId) {
        var deferred = $q.defer();
        $http.get(baseUrl + 'categories/' + categoryId + '/menuItems')
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      getMenuItemDetails: function(menuItemId) {
        var deferred = $q.defer();
        $http.get(baseUrl + 'menuItems/' + menuItemId)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data[0]);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      removeCategory: function(categoryId) {
        var deferred = $q.defer();
        $http.delete(baseUrl + 'categories/' + categoryId)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      editCategory: function(category) {
        var deferred = $q.defer();
        $http.put(baseUrl + 'edit/categories/' + category.id, category)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      createCategory: function(category) {
        var deferred = $q.defer();
        $log.debug(category);
        $http.post(baseUrl + 'new/restaurants/' + category.restaurant_id + '/category/', category)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      editMenuItem: function(menuItem) {
        var deferred = $q.defer();
        $http.put(baseUrl + 'edit/menuItems/' + menuItem.id, menuItem)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      createMenuItem: function(menuItem) {
        var deferred = $q.defer();
        console.log('hi')
        $http.post(baseUrl + 'new/categories/' + menuItem.category_id + '/menuItem/', menuItem)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      removeMenuItem: function(menuItemId) {
        var deferred = $q.defer();
        $http.delete(baseUrl + 'menuItems/' + menuItemId)
          .then(_success, _error);

        function _success(data) {
          deferred.resolve(data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      uploadRestaurantImage: function(file) {
        var fd = new FormData();
        var uploadUrl = 'upload/restaurant/'
        fd.append('file', file);

        var deferred = $q.defer();

        $http.post(baseUrl + uploadUrl, fd, { transformRequest: angular.identity, headers: { 'Content-Type': undefined } })
          .then(_success, _error)

        function _success(data) {
          deferred.resolve(data.data.file);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      uploadMenuItemImage: function(file) {
        var fd = new FormData();
        var uploadUrl = 'upload/menuItem/'
        fd.append('file', file);

        var deferred = $q.defer();

        $http.post(baseUrl + uploadUrl, fd, { transformRequest: angular.identity, headers: { 'Content-Type': undefined } })
          .then(_success, _error)

        function _success(data) {
          deferred.resolve(data.data.file);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      }

    }
  });
})();
