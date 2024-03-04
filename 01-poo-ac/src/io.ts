import * as IO from 'koa-socket-2';

const app = require('app');

const io_room = new IO({ namespace: 'room', ioOptions: { cors: {} }});
const io_display = new IO({ namespace: 'display', ioOptions: { cors: {} }});
const io_actions = new IO({ namespace: 'actions', ioOptions: { cors: {} }});

io_room.attach(app);
io_actions.attach(app);
io_display.attach(app);

io_room.on('connection', (ctx) => {
    console.log('room connected');
    io_room.broadcast('message', 'connected');
    ctx.on('disconnect', () => {
        console.log('room disconnected');
    });
});

io_display.on('connection', (ctx) => {
    console.log('display connected');
    io_display.broadcast('message', 'connected');
    ctx.on('disconnect', () => {
        console.log('display disconnected');
    });
});

io_actions.on('connection', (ctx) => {
    console.log('actions connected');
    io_actions.broadcast('message', 'connected');
    ctx.on('disconnect', () => {
        console.log('actions disconnected');
    });
});

console.log('io attached');

export { io_room, io_actions, io_display };