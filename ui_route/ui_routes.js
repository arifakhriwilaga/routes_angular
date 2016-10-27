//Define an angular module for our app
var sampleApp = angular.module('sampleApp', ['ui.router']);

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.controller('AddOrderController', function($scope) {
	$scope.message = 'This is Add new order screen';
});


sampleApp.controller('ShowOrdersController', function($scope) {
	$scope.message = 'This is Show orders screen';
});
sampleApp.config(function($stateProvider) {
  var showState = {
    name: 'AddNewOrder',
    url: '/AddNewOrder',
    templateUrl: 'example_route_add_order.html',
	controller: 'AddOrderController'
  }

  var addState = {
    name: 'ShowOrders',
    url: '/ShowOrders',
    templateUrl: 'example_route_show_orders.html',
	controller: 'ShowOrdersController'
  }

  $stateProvider.state(showState);
  $stateProvider.state(addState);
});

