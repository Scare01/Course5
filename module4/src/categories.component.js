(function () {


angular.module('Data')
.component('categories', {
  templateUrl: 'src/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();