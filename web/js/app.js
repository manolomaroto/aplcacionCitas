var myApp = angular.module("myApp", ["ngRoute","ngAnimate"]);

myApp.config(function($routeProvider){
	$routeProvider
		.when("/books", {
			templateUrl: "partials/books-list.html",
			controller: "bookListCtrl"
		})
		.when("/kart", {
			templateUrl: "partials/kart-list.html",
			controller: "kartListCtrl"
		})
	.otherwise({
		redirecTo : "/books"
	})
});

myApp.factory("kartService",function(){
	var kart = [];
	return {
		getKart: function(){
			return kart;
		},
		addToKart: function(book){
			kart.push(book);
		},
		buy: function(book){
			alert("Thanks for buying", book.date);
		}
	}
})

myApp.factory("bookService",function(){
	var books = [
		{
			date: "Lunes, 2 de Enero a las 13:00",
		},
		{
			date: "Lunes, 3 de Febrero a las 14:00",
		},
		{
			date: "Lunes, 4 de Marzo a las 15:00",
		},
		{
			date: "Lunes, 5 de Abril a las 16:00",
		},

		
	];

	return {
		getBooks: function(){
			return books;
		},
		addToKart:function(book){

		}
	}
})

myApp.controller("kartListCtrl", function($scope, kartService){
	$scope.kart = kartService.getKart();
	$scope.buy = function(book){
		kartService.buy(book)
	}
});

myApp.controller("headerCtrl", function($scope,$location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKart";
	$scope.appDetails.tagline = "Amplio horario a tu disposición";

	$scope.nav={};
	$scope.nav.isActive = function(path){
		if (path === $location.path()){
			return true;
		}
		return false;
		
	}
});

myApp.controller("bookListCtrl",function($scope,bookService,kartService){
	$scope.books = bookService.getBooks();

	$scope.addToKart = function(book){
		kartService.addToKart(book);
	}
})