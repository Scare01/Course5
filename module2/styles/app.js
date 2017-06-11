(function() {
  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
     var ToBuyList = this;

    ToBuyList.items = ShoppingListCheckOffService.getToBuyList();

    ToBuyList.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }
  
  AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }
  
  
  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      {name: "Cookies", quantity: "10"},
      {name: "Bread", quantity: "1"},
      {name: "Chips", quantity: "5"},
      {name: "Apples", quantity: "15"},
      {name: "Milk", quantity: "2"}
    ];
    
    var itemsBought = [];
    
    service.removeItem = function (itemIdex) {
      var element = itemsToBuy[itemIdex]
      itemsToBuy.splice(itemIdex, 1)
      itemsBought.push(element);
    };

    service.getAlreadyBoughtItems = function () {
      return itemsBought;
    };
    
    service.getToBuyList = function () {
      return itemsToBuy;
    };
  }
  

})();
