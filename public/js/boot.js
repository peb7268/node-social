require.config({
	paths: {
		jquery: 'libs/vendors/jquery/dist/jquery.min',
		underscore: 'libs/vendors/underscore/underscore',
		Backbone: 'libs/vendors/backbone/backbone',
		text: 'libs/vendors/text/text',
		templates: '../templates'
	},

	shim: {
		'Backbone': ['jquery', 'underscore'],
		'Social'  : ['Backbone']
	}
});

require(['Social'], function(Social){
	Social.initialize();
});