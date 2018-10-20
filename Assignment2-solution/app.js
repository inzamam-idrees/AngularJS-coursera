(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  
  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
  
  toBuyList.buyItem = function(itemIndex) {
		ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBougthList = this;

  alreadyBougthList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

// Service Function Defined here
function ShoppingListCheckOffService() {
  var service = this;
  
  var toBuyItems = [
    { name: "Pizza's", quantity: 2 },
    { name: "Cakes", quantity: 3 },
    { name: "Slice Juices", quantity: 6 },
    { name: "Pineapples", quantity: 10 },
    { name: "Mangoes", quantity: 24 }
  ];
  
  var alreadyBoughtItems = [];

  service.buyItem = function(itemIndex) {
    var item = toBuyItems[itemIndex];

    alreadyBoughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function() {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function() {
    return alreadyBoughtItems;
  };
  
}

})();
