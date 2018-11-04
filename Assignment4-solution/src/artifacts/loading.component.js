(function () {
'use strict';

  angular.module('Spinner')
    .component('loadingSpinner', {
      templateUrl: 'src/templates/loading.html',
      controller: SpinnerController
    });

    SpinnerController.$inject = ['$rootScope']
    function SpinnerController($rootScope) {
      var $ctrl = this;
      var listeners = [];

      $ctrl.$onInit = function () {
        var cancel  = $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
          $ctrl.show = true
        });
        listeners.push(cancel);

        cancel = $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
          $ctrl.show = false;
        });
        listeners.push(cancel);

        cancel = $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
          $ctrl.show = false;
        });
        listeners.push(cancel);
      };

      $ctrl.$onDestroy = function () {
        listeners.forEach(function (item) {
          item();
      });

    };
  };

})();