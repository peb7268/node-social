module.exports = function(config, mongoose, nodemailer){
	var crypto = require('crypto');

	var AccountSchema = new mongoose.Schema({
		email: { type: String, unique: true },
		password: { type: String },
		name: {
			first: { type: String },
			last:  { type: String }
		},
		birthday: {
			day: { type: Number, min: 1, max: 31, required: false },
			month: { type: Number, min: 1, max: 12, required: false },
			year: { type: Number }
		},
		photoUrl: { type: String },
		biography: { type: String }
	});

	var Account = mongoose.model('Account', AccountSchema);

	var registerCallback = function(err){
		if(err){
			return console.log(err);
		};
		return console.log('Account was created.');
	};

	var changePassword = function(accountId, newPassword){
		var shaSum = crypto.createHash('sha256');
		shaSum.update(newPassword);

		var hashedPassword = shaSum.digest('hex');
		Account.update({_id: accountId, },{$set: {password: hashedPassword}},{upsert: false},
			function changePasswordCallback(err){
				console.log('Password has been update for account: ' + accountId);
			});
	};

	var forgotPassword = function(){

	};

	var login = function(email, password, callback){
		var shaSum = crypto.createHash('sha256');
		shaSum.update(password);
		Account.findOne({ 
			email: email,
			password:shaSum.digest('hex')
		}, function(err, doc){
			callback(null!=doc);
		});
	};

	var register = function(email, password, firstName, lastName){
		var shaSum = crypto.createHash('sha256');
		shaSum.update(password);

		console.log('Registering ' + email);
		var user = new Account({
			email: email, 
			name: {
				first: firstName,
				last: lastName
			},
			password: shaSum.digest('hex');
		});

		user.save(registerCallback);
		console.log('Save command was sent');
	};

	return {
		register: register,
		forgotPassword: forgotPassword,
		changePassword: changePassword,
		login: login,
		Account: Account
	};
}