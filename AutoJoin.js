API.on(API.WAIT_LIST_UPDATE, jgWaitListUp);

function jgWaitListUp() {
    if(API.getWaitListPosition(API.getUser().id) == '-1') { API.djJoin(); }
}

API.chatLog("AutoJoin 69 Enabled");