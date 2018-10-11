(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

	$scope.sayMessage = function () {
    
    var elem = document.getElementById('lunch-menu').value;
    var msg = document.getElementById('msg');
		
    if(elem == "" || elem.trim() == "")
    {
    	$scope.message = "Please enter data first";
	    msg.style.color = "red";
	    elem.style.borderColor = "red";
    }
    else
    {
    	var words = elem.split(',');
		// console.log(words);

		if (words.length <= 3)
		{
			$scope.message = "Enjoy!";
			msg.style.color = "green";
			elem.style.borderColor = "green";
		}
		else
		{
			$scope.message = "Too much!";
			msg.style.color = "green";
			elem.style.borderColor = "green";
		}
    }
  };
}

})();
