(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


// This is the directive which is used to display the content on the screen
function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&',
      empty: '<'
    },
    controller: NarrowItDownController,
    controllerAs: 'ctrl',
    bindToController: true
  };
  return ddo;
}


// This is the controller which is used to call different kind of methods using the MenuSearchService
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var ctrl = this;

  ctrl.searchTerm = '';
  ctrl.empty = '';

  ctrl.searchItem = function () {

    if (ctrl.searchTerm == '' || ctrl.searchTerm == undefined) {
      ctrl.empty = MenuSearchService.isEmpty();
      ctrl.found = [];
      console.log(ctrl.empty);
    }
    else {
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function(result) {
        ctrl.found = result;
        ctrl.empty = '';
      })
      .catch(function(error) {
      console.log(error);
      });
      
    };
  };


  ctrl.remove = function (itemIndex) {
    return MenuSearchService.removeItem(itemIndex);
  }

}

// This is the service which is called for data processing which is then injected into NarrowItDownController
MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http, searchTerm) {
  var service = this;
  var foundItems = [];
  var emptyMessage = 'Nothing Found';

  service.getMatchedMenuItems = function (searchTerm) {
    
    searchTerm = searchTerm.trim().toLowerCase();

    return $http ({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    })
    .then(function(response) {
      foundItems = [];
      for(var i=0; i<response.data.menu_items.length; i++) {
        
        if (response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(response.data.menu_items[i]);
        }
        
      }
      return foundItems;

    }).catch(function(errorResponse) {
      console.log(errorResponse);
    });   
  };

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
    return foundItems;
  };

  service.isEmpty = function () {
    //console.log(emptyMessage);
    return emptyMessage;
  };
}

})();
