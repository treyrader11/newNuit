Template.login.rendered = function() {
	//Session.set('loggedIn', false);

}

Template.login.helpers({
	//loggedIn: function() {
	//	return Session.equals('loggedIn', false);
	//}
})

Template.login.events({
	"submit #login-form": function(event) {
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);

		if(isNotEmpty(email) &&
			isNotEmpty(password) &&
			isEmail(email) &&
			isValidPassword(password)) {

			Meteor.loginWithPassword(email, password, function(err) {
				if(err) {
					//checks mongoDB if user exists
					Bert.alert(err.reason, "danger", "growl-top-right");
					return false;
				} else {
					//Session.set('loggedIn', true);
					Router.go("/jokes");
					Bert.alert("You are now logged in", "success", "growl-top-right");
				}
			});
		}
		return false;
	}
});

var trimInput = function(val) {
	return val.replace(/^\s*|\s*$/g, "");
}

var isNotEmpty = function(val) {
	if (val && val !== '') {
		return true;
	}
	Bert.alert("PLease fill in all fields", "danger", "growl-top-right");
	return false;
}

var isEmail = function(value) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(filter.test(value)) { //test() native js 
		return true;
	}
	Bert.alert("Please use a valid email address", "danger", "growl-top-right");
}


isValidPassword = function(password) {
	if(password.length < 6) {
		Bert.alert("Password must be at least six charaters", "danger", "growl-top-right");
		return false;
	}
	return true;
}