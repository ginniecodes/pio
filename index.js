/*Here's the app index, here's the change to the index....*/
var server = require('./src/server-module.js'),
	notify = new Notification()
server()
notify.req = function (){
	return notify.requestPermission()
}

if(notify.req == 'granted')
	console.log('yes!')