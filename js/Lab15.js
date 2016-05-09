(function() {

var app = angular.module("ToDoList", []);

app.controller("mainController", ['$scope', function ($scope) {

$scope.inputText = "Enter new task";

 $scope.arrayToDoList = [
	'Rake Yard', 
	'Weed Garden', 
	'Mow Lawn', 
	'Wash Car', 
	'Take Out Trash'
 	];

$scope.addToDo = function () {
	
	$scope.arrayToDoList.push(this.inputText);
	};

}]);
})();