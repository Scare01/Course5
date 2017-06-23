(function () {
"use strict";

angular.module('public')
.controller('UserController', UserController);

UserController.$inject = ['user', 'ApiPath'];
function UserController(user, ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.user = user;
}


})();
