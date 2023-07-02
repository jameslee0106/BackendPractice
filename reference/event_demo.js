const EventEmitter = require('events')

//create class
class MyEmitter extends EventEmitter {

}

// Init object
const myEmitter = new myEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'))

//Init event
myEmitter.emit('event')