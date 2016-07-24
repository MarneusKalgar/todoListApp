'use strict';

angular.module('todoListApp')
	.service('dataService', function($http) {

		this.getTodos = function(callback) {
			$http.get('json/todos.json').then(callback);
		};

		this.deleteTodo = function(todo) {
			console.log('the '+ todo.name + ' has been deleted');
		};

		this.saveTodo = function(todo) {
			console.log('the '+ todo.name + ' has been saved');
		};
	});