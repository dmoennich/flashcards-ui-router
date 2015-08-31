app.config(function ($stateProvider) {
	$stateProvider.state("managecard", {
		url: "/manageCards/:id",
		template: "<card-form card='card'></card-form>",
		controller: function ($scope, $stateParams, FlashCardsFactory) {
			var id = $stateParams.id;
			FlashCardsFactory.getFlashCard(id)
			.then(function (foundCard) {
				console.log(foundCard);
				$scope.card = foundCard;
			})
			.then(null, function (err) {
				console.error(err);
			});
		}
	});
});