app.config(function($stateProvider) {
  $stateProvider.state("form", {
    url: '/form',
    templateUrl: '/templates/form.html',
    controller: 'NewCardController'
  });
});
