(function() {
  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
   $scope.items = "";
   $scope.clickButton = function() {
    if ($scope.items.split("").length == "0"){
      $scope.text = "Please enter data first.";
      $scope.my_style = {color:'red'};
      $scope.my_style2 = {border: '1px solid red'};
    }else if ($scope.items.split(" ").length >= 4 ){
      $scope.text = "Too much!";
      $scope.my_style = {color:'green'};
      $scope.my_style2 = {border: '1px solid green'};
    }else if($scope.items.split(" ").length <= 3 ) {
      $scope.text = "Enjoy!";
      $scope.my_style = {color:'green'};
      $scope.my_style2 = {border: '1px solid green'};
    }
   };
  }
})();
