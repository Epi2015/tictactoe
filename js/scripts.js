// // Business Logic
//
// function Ticket(filmName, showing, SeniorDiscount) {
// 	this.filmName = filmName;
// 	this.showing = showing;
// 	this.SeniorDiscount = SeniorDiscount;
// }
//
// Ticket.prototype.price = function() {
//
// 	//all tickets begin with a base price of 6
// 	var ticketPrice = 8;
//
// 	//if a ticket is for a new release movie add 2 to its cost.
// 	// if it's for an old movie, do not add to its cost.
// 	if (
// 		this.filmName === "Fifty Shades of Gray" ||
// 		this.filmName === "Star Wars: Episode VII" ||
// 		this.filmName === "The Revenant" ||
// 		this.filmName === "The Hateful Eight"
// 		) {
// 		ticketPrice += 2;
// 	} else if (this.filmName === "The Patriot") {
// 		ticketPrice += 0;
// 	}
//
// 	//if a ticket is for a main showing add 2 to its cost.
// 	//if a ticket is for a matinee showing do not add to its cost.
// 	if (this.showing === "Main" ) {
// 		ticketPrice += 2;
// 	} else if (this.showing ==="Matinee") {
// 		ticketPrice += 0;
// 	}
//
// 	if (this.SeniorDiscount === true) {
// 		ticketPrice -=2;
// 	} else if (this.SeniorDiscount === false) {
// 		ticketPrice += 0;
// 	}
//
// 	return ticketPrice;
// };
//
//
// // UI Logic
//
//
// $(document).ready(function() {
//
// 	$("form#ticket-information").submit(function(event) {
//
// 		event.preventDefault();
//
// 		var submittedFilm = $("select#film").val();
// 		var stringAge = $("input#age").val();
// 		var integerAge = parseInt(stringAge);
// 		var SeniorDiscount;
//
//
// 		if (integerAge >= 60) {
// 			SeniorDiscount = true;
// 		} else if (integerAge < 60) {
// 			SeniorDiscount = false;
// 		}
//
// 		var submittedShowing = $("select#showing").val();
//
// 		newTicket = new Ticket(submittedFilm, submittedShowing, SeniorDiscount);
// 		newTicketPrice = newTicket.price();
//
// 		$("span#finalPrice").append(newTicketPrice);
//
// 	});
// });
