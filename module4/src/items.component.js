(function () {


angular.module('Data')
.component('items', {
  templateUrl: 'src/items.template.html',
  bindings: {
    category: '<'
  }
});

})();