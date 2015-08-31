app.config(function($stateProvider) {
	$stateProvider.state("stats", {
		url: "/stats",
		templateUrl: "/templates/statistics.html",
		controller: "StatsController"
	});
});
