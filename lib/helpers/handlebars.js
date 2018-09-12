 Handlebars.registerHelper("loggedIn", function() {
 	return Session.equals('loggedIn', false);
 });

 Handlebars.registerHelper('sessionEquals', function (key, value) {
	return Session.equals(key, value); //Issue #617 is resolved. Template parameters now accept: string, boolean, integer and negative integer
});

 //call the helper functions inside helperfunctions.js