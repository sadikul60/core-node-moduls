// create eventEmmiter
const events = require('events');

const eventEmmiter = new events.EventEmitter();

// creating an event handler
const callingFriend = () => {
    console.log("Bondhu! tmi kothai? ami dariye achi to!!");
}

// assign the handler into an event 
eventEmmiter.on('scream', callingFriend).callingFriend

// firing the event 
eventEmmiter.emit('scream');