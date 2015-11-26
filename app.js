/* In this file, start the use the server module and push the response to
the view */
var server = require('./src/server-module.js'),
	notify = new Notification()
server()
notify.req = function (){
	return notify.requestPermission()
}
if(notify.req == 'granted')
	console.log('yes!')
