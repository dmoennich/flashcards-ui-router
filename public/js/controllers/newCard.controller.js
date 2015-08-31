app.controller('NewCardController', function ($scope) {
	$scope.newCard = {
	    question: null,
	    category: '',
	    answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	};
});