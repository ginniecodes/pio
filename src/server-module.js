/*in this file, make a module to perform the server that interacts to 
twitter API*/
/*var express = require('express'),
	fs = require('fs'),
	app = express(),
	port = 8009,
	file = '../index.html',
	server = function() {
		app.get('/', function (req, res){
			fs.readFile(file, function(err, data){
			if(err)
				throw err
			return res.write(data)
		})
	})

	app.listen(port, function(){
		console.log('server successfully running on localhost:' + port)
	})
}

module.export = server*/
var express = require('express'),
	OAuth = require('oauth-1.0a'),
	path = require('path'),
	app = express()

var T = {
	setPublic: function(p){
		this.publicKey = p;
	},
	setSecret: function (s){
		this.secret = s;
	}
},
foo = new OAuth(consumer: T, signature_method: 'HMCA-SHA1');