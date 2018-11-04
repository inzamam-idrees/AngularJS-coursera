(function () {
    'use strict';
    
    angular.module('data')
    .component('menuList', {
      templateUrl: 'src/templates/itemlist.template.html',
      bindings: {
        items: '<',
          name:'<'
        
      }
    });  
    
})();