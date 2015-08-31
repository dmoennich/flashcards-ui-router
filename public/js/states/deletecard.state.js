app.config(function($stateProvider) {
  $stateProvider.state("deletecard", {
    url: '/deletecard/:id',
    templateUrl: '/templates/delete.html',
    controller: function($scope, $stateParams, $state,
      FlashCardsFactory) {
      $scope.id = $stateParams.id;

      $scope.delete = function() {
        FlashCardsFactory.deleteCard($scope.id).then(function() {
          alert("DELETED!");

        }).then(null, console.error);
      };
    }
  });
});
