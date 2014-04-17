define(['text!templates/forgetPassword.html'], function(forgotTemplate){
	var ForgotPasswordView = Backbone.View.extend({
		el: $('#content'),

		render: function(){
			this.$el.html(forgotTemplate);
			$('#error').hide();
			return this;
		}
	});

	return ForgotPasswordView;
});