var express = require('express'),
app = express(),
twitter = require('./src/server-module.js'),
url = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json',
counter = 6, port = 8009
getUrl = url + '?' + 'count=' + counter

app.post('/', function (req, res){
	res.send(twitter(getUrl))
})

app.listen(port, function(){
	console.log('server successfully on localhost:' + port)
})
