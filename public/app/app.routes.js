$app.config(function($routeProvider, $httpProvider) {

		$routeProvider.
			when("/",{
				templateUrl : "./app/components/home/homeView.html",
				controller : "HomeController"
			})
			.when("/notes",{
				templateUrl : "./app/components/notes/notesView.html",
				controller : "NotesController"
			})
      .otherwise({
        redirectTo: '/'
      });

	//$httpProvider.responseInterceptors.push(interceptor);
});
