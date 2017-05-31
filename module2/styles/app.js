(function() {
  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController);

  ShoppingListCheckOffController.$inject = ['$scope'];
  function ShoppingListCheckOff($scope) {

  }

})();
