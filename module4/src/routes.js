(function () {


angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

 
  $urlRouterProvider.otherwise('/');
  console.log($urlRouterProvider.otherwise('/'));

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories.template.html',
    controller: 'CategoryListController as categoryList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/categories/{categoryId}',
    templateUrl: 'src/items.template.html',
    controller: 'ItemListController as itemList',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
             function ($stateParams, MenuDataService) {
               return MenuDataService.getItemsForCategory($stateParams.categoryId);
             }]
    }
  })
}

})();