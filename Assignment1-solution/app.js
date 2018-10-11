(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

	$scope.sayMessage = function () {
    
    var elem = document.getElementById('lunch-menu').value;
    var msg = document.getElementById('msg');
    var input = document.getElementById('lunch');
		
    if(elem == "" || elem.trim() == "")
    {
	document.getElementById('lunch').style.borderColor = "red";
    	$scope.message = "Please enter data first";
	msg.style.color = "red";
	    
    }
    else
    {
    	var words = elem.split(',');
		// console.log(words);

		if (words.length <= 3)
		{
			document.getElementById('lunch').style.borderColor = "green";
			$scope.message = "Enjoy!";
			msg.style.color = "green";
		}
		else
		{
			document.getElementById('lunch').style.borderColor = "green";
			$scope.message = "Too much!";
			msg.style.color = "green";
		}
    }
  };
}

})();
