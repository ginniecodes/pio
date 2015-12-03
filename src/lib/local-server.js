var Oauth = require('oauth-1.0a'),
	http = require('http'),
	fs = require('fs')
	oauth = Oauth(options);
var options = {
	consumer: {
		public: "FjNnsIOSMjYd03iEZEVJaaWPZ",
		secret: "PPIZ72Y0HIQkzq9GoTRVlQV3LzW5GC3ywSGSB7curYYBCLlHzM"
	},
	signature-method: "HMCA-SHA1",
	version: "1.0"
},
token = {
		puclic: "102399145-RfsdvLWRQFwLbrqebv5KnWccJNwnw1HKK8X5zTcj",
		secret: "EKYDXf481H1mps6Si9g49aTUe2eviVELrpGQwR705cIP1"
	},
tweet_req = {
	method: 'GET',
	url: '',
	data: ''
};

//The header
oauth.toHeader(oauth.authorize(tweet_req, token));