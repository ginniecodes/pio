/*in this file, make a module to perform the server that interacts to 
twitter API*/
var express = require('express'),
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

module.export = server
