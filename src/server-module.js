var express = require('express'),
app = express(),
fs = require('fs'),
url = 'https://api.twitter.com/1.1/statuses/'

a = fs.createWriteStream('one.txt'),
getMentions = function (jsonfile) {
	app.get(url + jsonfile,function(req, res){
		res.pipe(a)
		res.send(a.toString())
	})
	return a
}

module.export = getMentions