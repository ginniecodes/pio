var express = require('express'),
app = express(),
fs = require('fs'),

a = fs.createWriteStream('one.txt'),
getApi = function (url) {
	app.get(url,function(req, res){
		res.pipe(a)
	})
	return a
}

module.export = getApi