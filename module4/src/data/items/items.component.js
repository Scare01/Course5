(function () {


angular.module('Data')
.component('items', {
  templateUrl: 'src/items/items.template.html',
  bindings: {
    category: '<'
  }
});

})();