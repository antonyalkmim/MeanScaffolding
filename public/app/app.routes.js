$app.config(function($routeProvider, $httpProvider) {

		$routeProvider.
			when("/",{
				templateUrl : "./components/home/homeView.html",
				controller : "HomeController"
			})
      .otherwise({
        redirectTo: '/'
      });

	//$httpProvider.responseInterceptors.push(interceptor);
});
