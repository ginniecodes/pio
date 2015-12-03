var http = require('http'),
	oauth = require('./request');

var tweetReq = {
	method: 'GET',
	url: '',
	data: ''
}
var server = http.createServer(function(req, res){
	if(req.method == 'GET')
		req.setHeader(oauth(tweetReq))
	res.on('data', function(chunk){
		res.end(chunk);
	})
});

server.listen(8099, function(){
	console.log('Server successfully running on port 8099');
})