var express = require('express'),
	fs = require('fs'),
	app = express(),
	port = 8009,
	file = 'index.html'

app.get('/', function (req, res){
	fs.readFile(file, function(err, data){
		if(err)
			throw err
		res.write(data)
	})
})

app.listen(port, function(){
	console.log('server successfully running on localhost:' + port)
})