var express = require('express'),
	fs = require('fs'),
	app = express(),
	port = 8009

app.get('/', function (req, res){
	fs.readFile('index.html', function(err, data){
		if(err)
			throw err
		res.write(data)
	})
})

app.listen(port, function(){
	console.log('server successfully running on localhost:' + port)
})