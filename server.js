var express = require('express');
var app 	= express();

app.configure(function(){
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));
});

//## Routes ######################################################
app.get('/', function(req, res){
	res.render('index.jade', { layout: false });
});

app.get('/account/authenticated', function(req, res){
	if(typeof req.session != 'undefined' && req.session.loggedIn){
		res.send(200);
	} else {
		res.write('unauthed', 'utf8');
		res.send(401);
	}
});

app.post('/register', function(req, res){
	var firstName = req.param('firstName', '');
	var lastName  = req.param('lastName', '');
	var email 	  = req.param('email', '');
	var password  = req.param('password', '');

	if(password == null || email == null){
		res.send(400);
		return;
	}

	Account.register(email, password, firstName, lastName);
	res.send(200);
});



var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
}); 