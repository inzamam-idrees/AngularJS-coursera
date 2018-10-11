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
    	$scope.message = "Please enter data first";
	    msg.style.color = "red";
	    input.style.borderColor = "red";
	    console.log(input);
    }
    else
    {
    	var words = elem.split(',');
		// console.log(words);

		if (words.length <= 3)
		{
			$scope.message = "Enjoy!";
			msg.style.color = "green";
			input.style.borderColor = "green";
		}
		else
		{
			$scope.message = "Too much!";
			msg.style.color = "green";
			input.style.borderColor = "green";
		}
    }
  };
}

})();
