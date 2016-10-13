import notify from './notification';
import request from './request';



request.send(user, function(error=null, res){
    if(error)
        return ;
    return notify('Holi', 'Working?', 'This is a message to prove it works!');
    //notify(`${res.username} ${res.action}`, `${res.datetime}`, ${res.message}, `/tmp/2634/${res.img}`, true, true);
});

