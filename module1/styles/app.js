(function() {
  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
   $scope.items = "";
   var good_variant = $scope.items.split([/(\d+)?[.,]?(\d+)\./['']]);
   var bad_variant = $scope.items.split([/(\d+)?[.,]?(\d+)\./['', 4]]);
   $scope.clickButton = function() {
    if ($scope.items.split([/(\d+)?[.,]?(\d+)\./['']]).length == ""){
      $scope.text = "empty";
    }else if ($scope.items.split("").length == good_variant.length){
      $scope.text = "good";
    }else if($scope.items.split("") == bad_variant){
      $scope.text = "bad";
    }
    
    
   }
   
   
   
   
  
   
  };
  



})();
