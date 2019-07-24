// Bring Mongoose into the app
const mongoose = require( 'mongoose' );
const config = require('./config');
// Build the connection string

//export this function and imported by server.js
module.exports =async function(){

	if(!config.user)
		 mongoose.connect('mongodb://'+config.db.url+'/'+config.db.db_name);
	else
		 mongoose.connect('mongodb://'+config.db.username+":"+config.db.password+"@"+config.db.url+":"+config.db.port+'/'+config.db.db_name);

	mongoose.set('debug', config.env !== 'production');
	mongoose.connection.on('connected', function(){
		console.log("Mongoose default connection is open to ", 'mongodb://localhost/eze');
	});

	mongoose.connection.on('error', function(err){
		console.log("Mongoose default connection has occured "+err+" error");
	});

	mongoose.connection.on('disconnected', function(){
		console.log("Mongoose default connection is disconnected");
	});

	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log("Mongoose default connection is disconnected due to application termination");
			process.exit(0)
		});
	});
}

