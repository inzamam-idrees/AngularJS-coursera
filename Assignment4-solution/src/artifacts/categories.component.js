(function () {
    'use strict';
    
    angular.module('data')
    .component('categoryList', {
      templateUrl: 'src/templates/category-list.template.html',
      bindings: {
        category: '<'
      }
    });
    
    
})();