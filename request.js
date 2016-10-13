const Oauth = require('oauth-1.0a'), request = require('request'),
options = {
    consumer: {
        public: "FjNnsIOSMjYd03iEZEVJaaWPZ",
        secret: "PPIZ72Y0HIQkzq9GoTRVlQV3LzW5GC3ywSGSB7curYYBCLlHzM"
    },
    signature_method: "HMAC-SHA1",
    version: "1.0"
},
    
token = {
  puclic: "102399145-RfsdvLWRQFwLbrqebv5KnWccJNwnw1HKK8X5zTcj",
  secret: "EKYDXf481H1mps6Si9g49aTUe2eviVELrpGQwR705cIP1"
},

oauth = Oauth(options);


export default function tweetReq(username, cb) {
  const reqData = {
    method: 'GET',
    url: 'https://api.twitter.com/1.1/'
  };
  
  request({
    url: reqData.url,
    method: reqData.method,
    form: oauth.authorize(reqData, token)
  }, function(error, res, body) {
    if(error)
      return 'Error in request';

    cb(null, '');
  });
}
