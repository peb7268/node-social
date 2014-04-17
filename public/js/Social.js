define(['router'], function(router){
	var initialize = function(){
		checkLogin(runApplication);
	};

	var checkLogin = function(callback){
		$.ajax({
			url: '/account/authenticated',
			method: "GET"
		})
		.done(function(callback) {
			callback(true);
		})
		.fail(function() {
			callback(false);
		});
	};

	var runApplication = function(authenticated){
		if(! authenticated) {
			window.location.hash = 'login';
		} else {
			window.location.hash = 'index';
		}
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});