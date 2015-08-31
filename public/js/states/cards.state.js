app.config(function($stateProvider) {
  $stateProvider.state("cards", {
    url: '/cards',
    templateUrl: "/templates/cards.html",
    controller: "MainController"
    });
});
