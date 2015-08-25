$app.config(function($routeProvider, $httpProvider) {

		$routeProvider
			// .when("/",{
			// 	templateUrl : "./app/components/home/homeView.html",
			// 	controller : "HomeController"
			// })
			.when("/users",{
				templateUrl : "./app/components/users/usersView.html",
				controller : "UsersController"
			})
			.otherwise({
				redirectTo: '/users'
			});

	//$httpProvider.responseInterceptors.push(interceptor);
});
