define(['text!templates/registration.html'], function(registerTemplate){
	var RegisterView = Backbone.View.extend({
		el: $('#content'),

		events: {
			'submit form' : 'register'
		},

		register: function(e){
			e.preventDefault();
			$.post('/register', 
			{
				firstName: $('input[name=firstName').val(),
				lastName: $('input[name=lastName').val(),
				email: $('input[name=email').val(),
				password: $('input[name=password').val(),
			}, 
			function(data, textStatus, xhr) {
				console.log(data);
			});
			return false;
		},

		render: function(){
			this.$el.html(registerTemplate);
			return this;
		}
	});

	return RegisterView;
});