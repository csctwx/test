

$(document).ready(function(){

	$("#activationsAvailableAddonsAcceptTerms").click(function() {
	
	 	if($("#activationsAvailableAddonsAcceptTerms").hasClass("checked")) {
		

			$("#activationsAvailableAddonsAddToCartButton").removeClass("disabled");
			$("#activationsAvailableAddonsAcceptTerms").removeClass("checked")

		
		} else {


			$("#activationsAvailableAddonsAddToCartButton").addClass("disabled");
			$("#activationsAvailableAddonsAcceptTerms").addClass("checked")
		}

	});

});
