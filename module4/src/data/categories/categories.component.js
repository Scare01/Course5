(function () {


angular.module('Data')
.component('categories', {
  templateUrl: 'src/categories/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();