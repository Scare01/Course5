(function() {
  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.name = "";
  };
  
  function ClickButton($scope) {
    $scope.name = "Hello!";
  };


})();
