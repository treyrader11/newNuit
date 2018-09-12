Router.configure({
	layoutTemplate: 'supportLayout'
});

Router.map(function(){
	// Jokes
	this.route('jokes', {
		path: '/jokes',
		template: 'jokes'
	});

	// Login
	this.route('login', {
		path: '/',
		template: 'login'
	});

	// Signup
	this.route('signup', {
		path: '/signup',
		template: 'signup'
	});

	// Profile
	this.route('profile', {
		path: '/profile',
		template: 'profile'
	});

	// Rankings
	this.route('rankings', {
		path: '/rankings',
		template: 'rankings'
	});

	// Search
	this.route('search', {
		path: '/search',
		template: 'search'
	});
});


//when we navigate to '/jokes', iron router renders the jokes template. 
//the home page is '/'.