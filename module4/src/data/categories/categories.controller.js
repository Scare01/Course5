(function () {


angular.module('Data')
.controller('CategoryListController', CategoryListController);

CategoryListController.$inject = ['items'];
function CategoryListController(items) {
  var categoryList = this;
  categoryList.items = items;
}

})();