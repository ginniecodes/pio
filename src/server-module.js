var Oauth = require('oauth-1.0a'),
	http = require('http');
var oauth = Oauth({
	consumer: {
		public: 'FjNnsIOSMjYd03iEZEVJaaWPZ',
		secret: 'PPIZ72Y0HIQkzq9GoTRVlQV3LzW5GC3ywSGSB7curYYBCLlHzM'
	},
	signature_method: 'HMAC-SHA1'
}),

token = {
	public: '102399145-RfsdvLWRQFwLbrqebv5KnWccJNwnw1HKK8X5zTcj',
	secret: 'EKYDXf481H1mps6Si9g49aTUe2eviVELrpGQwR705cIP1'
};

var request_data = {
	url: 'https://api.twitter.com/statuses/mentions_timeline.json',
	method: 'GET',
	data: {
		oauth_version: '1.0'
	}
},

req = http.request({url: request_data.url,
	method: request_data.method,
	form: request_data.data,
	header: oauth.toHeader(oauth.authorize(request_data, token))
	}, function(res){
		console.log(res.statusCode);
		console.log(JSON.stringify(res.headers));
		res.on('data', function(chunk){
			console.log('BODY: ' + chunk);
		});
	}).on('error', function(err){console.error(err.message);});
req.write('data\n');
req.end();
