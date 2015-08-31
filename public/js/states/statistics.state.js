app.config(function($stateProvider) {
	$stateProvider.state("stats", {
		url: "/",
		templateUrl: "/templates/statistics.html",
		controller: "StatsController"
	});
});
