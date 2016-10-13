import notifier from 'node-notifier';
import path from 'path';

export default function notify(title=null, subtitle=null, message=null, icon=null, sound=true, wait=true, profilePic=null) {
    /* notify use from notifier
    {
    [title: string,
    subtitle: string,]
    message: string[,
    icon: string,
    sound: bool default true,
    wait: bool default true]
    }
    */
    notifier.notify({
        title,
        subtitle,
        message,
        icon: path.join(__dirname, profilePic),
        sound,
        wait
    });
    
}

/* to do: onClick open the browser */