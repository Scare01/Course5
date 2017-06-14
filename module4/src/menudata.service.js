(function () {


angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$rootScope', '$http']
function MenuDataService($rootScope, $http, ApiBasePath) {
  var service = this;
  var categories = [];
  
  service.getAllCategories = function() {
    $rootScope.$broadcast('data:processing', {on: true});
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
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
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="),
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