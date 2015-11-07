var express = require('express'),
app = express(),
twitter = require('./src/server-module.js'),
url = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json',
counter = 6,
getUrl = url + '?' + 'count=' + counter

app.post('/', function (req, res){
	res.send(twitter(getUrl))
})

app.listen('8009', function(){
	console.log('server successfully on localhost:8009')
})