$(function() {

$('#cardNumber').validateCreditCard(function(result) {

					if(result.card_type.name == "mastercard") {
						$("#creditCardImage").removeClass('glyphicon');
						$("#creditCardImage").removeClass('glyphicon-credit-card');
						$("#creditCardImage").addClass('pf pf-mastercard');
		
					} if(result.card_type.name == "amex") {
						$("#creditCardImage").removeClass('glyphicon');
						$("#creditCardImage").removeClass('glyphicon-credit-card');
						$("#creditCardImage").addClass('pf pf-american-express');
		
					} if(result.card_type.name == "diners_club_carte_blanche") {
						$("#creditCardImage").removeClass('glyphicon');
						$("#creditCardImage").removeClass('glyphicon-credit-card');
						$("#creditCardImage").addClass('pf pf-diners');
		
					} if(result.card_type.name == "diners_club_international") {
						$("#creditCardImage").removeClass('glyphicon');
						$("#creditCardImage").removeClass('glyphicon-credit-card');
						$("#creditCardImage").addClass('pf pf-diners');
		
					} if(result.card_type.name == "jcb") {
						$("#creditCardImage").removeClass('glyphicon');
						$("#creditCardImage").removeClass('glyphicon-credit-card');
						$("#creditCardImage").addClass('pf pf-jcb');
		
					} if(result.card_type.name == "visa_electron") {
						$("#creditCardImage").removeClass('glyphicon');
						$("#creditCardImage").removeClass('glyphicon-credit-card');
						$("#creditCardImage").addClass('pf pf-visa-electron');
		
					} if(result.card_type.name == "visa") {
						$("#creditCardImage").removeClass('glyphicon');
						$("#creditCardImage").removeClass('glyphicon-credit-card');
						$("#creditCardImage").addClass('pf pf-visa');
		
					} if(result.card_type.name == "maestro") {
						$("#creditCardImage").removeClass('glyphicon');
						$("#creditCardImage").removeClass('glyphicon-credit-card');
						$("#creditCardImage").addClass('pf pf-mastercard');
		
					}  if(result.card_type.name == "discover") {
						$("#creditCardImage").removeClass('glyphicon');
						$("#creditCardImage").removeClass('glyphicon-credit-card');
						$("#creditCardImage").addClass('pf pf-discover');
		
					} else {
						$("#creditCardImage").addClass('glyphicon');
						$("#creditCardImage").addClass('glyphicon-credit-card');

					}
				   
					});



});
