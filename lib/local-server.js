var http = require('http'),
	oauth = require('./request'),
	buffer = require('buffer');

var tweetReq = {
	method: 'GET',
	url: 'https://api.twitter.com/1.1/',
	data: ''
}
var server = http.createServer(function(req, res){
	if(req.method == 'GET'){
		res.write(new Buffer(oauth(tweetReq).toString()));
	}
	res.on('data', function(chunk){
		res.end(chunk);
	})
});

server.listen(8099, function(){
	console.log('Server successfully running on port 8099');
})