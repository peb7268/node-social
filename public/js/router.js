define(['views/index', 'views/RegisterView', 'views/LoginView', 'views/ForgotPasswordView'], 
	function(IndexView, RegisterView, LoginView, ForgotPasswordView){
		var Router = Backbone.Router.extend({
			currentView: null, 

			routes: {
				index: 'index',
				login: 'login',
				register: 'register',
				forgotPassword: 'forgotPassword'
			},

			changeView: function(view){
				if(this.currentView != null) this.currentView.undelegateEvents();
				this.currentView = view;
				this.currentView.render();
			},

			index: function(){
				this.changeView(new IndexView);
			},

			login: function(){
				this.changeView(new LoginView);
			},

			register: function(){
				this.changeView(new RegisterView);
			},

			forgotPassword: function(){
				this.changeView(new ForgotPasswordView);
			}

		});

		return Router;
	}
);