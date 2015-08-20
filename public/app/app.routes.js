$app.config(function($routeProvider, $httpProvider) {

		$routeProvider
			// .when("/",{
			// 	templateUrl : "./app/components/home/homeView.html",
			// 	controller : "HomeController"
			// })
			.when("/notes",{
				templateUrl : "./app/components/notes/notesView.html",
				controller : "NotesController"
			})
			.when("/notes/add",{
				templateUrl : "./app/components/notes/notesAddView.html",
				controller : "NotesAddController"
			})
      .otherwise({
        redirectTo: '/notes'
      });

	//$httpProvider.responseInterceptors.push(interceptor);
});
