define(['text!templates/login.html'], function(loginTemplate){
	var LoginView = Backbone.View.extend({
		el: $('#content'),

		events: {
			'submit form' : 'login'
		},

		login: function(e){
			e.preventDefault();
			$.post('/login', 
			{
				email: $('input[name=email').val(),
				password: $('input[name=password').val(),
			}, 
			function(data, textStatus, xhr) {
				console.log(data);
			}).error(function(){
				var $error = $('#error');
				$error.text('Unable to login.');
				$error.slideDown(100);
			});
			return false;
		},

		render: function(){
			this.$el.html(loginTemplate);
			$('#error').hide();
			return this;
		}
	});

	return LoginView;
});