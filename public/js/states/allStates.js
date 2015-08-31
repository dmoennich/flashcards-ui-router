app.config(function($stateProvider) {
  $stateProvider.state("all", {
    url: '/',
    views: {
      form: {
        templateUrl: '/templates/form.html',
        controller: 'NewCardController'
      },
      stats: {
        templateUrl: "/templates/statistics.html",
        controller: "StatsController"
      },
      cats: {
        templateUrl: "/templates/cats.html",
        controller: "MainController"
      }
    }
  });
});
