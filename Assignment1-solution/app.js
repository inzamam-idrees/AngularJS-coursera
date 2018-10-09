(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

	$scope.sayMessage = function () {
    
    var elem = document.getElementById('lunch-menu').value;
    if(elem == "" || elem.trim() == "")
    {
    	$scope.message = "Please enter data first";
    }
    else
    {
    	var words = elem.split(',');
		// console.log(words);

		if (words.length <= 3)
		{
			$scope.message = "Enjoy!";
		}
		else
		{
			$scope.message = "Too much!";
		}
    }
  };
}

})();
