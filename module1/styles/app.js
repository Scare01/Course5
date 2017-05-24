(function() {
  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
   $scope.items = "";
   $scope.clickButton = function() {
    if ($scope.items.split("").length == "0"){
      $scope.text = "Please enter data first.";
    }else if ($scope.items.split(" ").length >= 4 ){
      $scope.text = "Too much!";
    }else if($scope.items.split(" ").length <= 3 ) {
      $scope.text = "Enjoy!";
    }
   };
  }
})();
