(function () {


angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$rootScope', '$http', 'ApiBasePath']
function MenuDataService($rootScope, $http, ApiBasePath) {
  var service = this;
  var categories = [];
  // var items = [];

  service.getAllCategories = function() {
    $rootScope.$broadcast('data:processing', {on: true});
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    })
    .then(function (response) {
      $rootScope.$broadcast('data:processing', {on: false});
      return response.data;
    });
  }

  service.getItemsForCategory = function(categoryShortName) {
    $rootScope.$broadcast('data:processing', {on: true});
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    })
    .then(function (response) {
      $rootScope.$broadcast('data:processing', {on: false});
      return response.data.menu_items;
    });
  };
}

})();