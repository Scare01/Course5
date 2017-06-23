(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var shortNames = [];
  var user;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getShortNamesFromMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      response.data.menu_items.forEach(function(item) {
        shortNames.push(item.short_name);
      });
      return shortNames;
    });
  };

  service.setUserInfo = function (userInfo) {
    return $http.get(
      ApiPath + '/menu_items/' + userInfo.favoriteDish + '.json'
    )
    .then(function (response) {
      userInfo["dish"] = response.data;
      user = userInfo;
    });
  }

  service.getUserInfo = function (userInfo) {
    return user;
  }

}

})();