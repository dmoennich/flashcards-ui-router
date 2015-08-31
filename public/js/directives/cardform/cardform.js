app.directive("cardForm", function (FlashCardsFactory, $state) {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/cardform/cardform.html',
    scope: {
		newCard: "=card"
    },
    link: function (scope, element, attributes) {
		scope.categories = FlashCardsFactory.categories;
		
		function resetCard () {
			scope.newCard = {
				question: null,
				category: '',
				answers: [
					{ text: null, correct: false },
					{ text: null, correct: false },
					{ text: null, correct: false }
				]
			};
		}


		scope.createNewCard = function () {
			FlashCardsFactory.createCard(scope.newCard)
			.then(function (createdCard) {
				resetCard();
			});
		};

		scope.updateCard = function () {
			FlashCardsFactory.updateCard(scope.newCard)
			.then(function () {
				$state.go("cards");
			});
		};

		scope.saveCard = function () {
			if (scope.newCard._id) {
				scope.updateCard();
			} else {
				scope.createNewCard();
			}
		};
    }
  };
});
