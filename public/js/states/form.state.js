app.config(function($stateProvider) {
  $stateProvider.state("form", {
    url: '/',
    template: '/templates/form.html',
    controller: 'NewCardController'
  });
});
