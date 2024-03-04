import 'di';
import { CONTROL_PANEL_SERVICE, ROOM_SERVICE, SEND_MESSAGE_SERVICE } from 'data';
import Container from 'typedi';
import { Room } from 'interfaces/room';
import { Message } from 'services-interface/message';
import { DestinyMessage } from 'destiny-message';
import { ControlPanel } from 'interfaces/control-panel';

const app = require('app');
const io = require('io');

const cpRouter = require('routes/control-panel-route');

let room: Room;
let cp: ControlPanel;

const msg = Container.get(SEND_MESSAGE_SERVICE);
msg.sendedMessageSubject.subscribe((message: Message) => {
    switch (message.destiny) {
        case DestinyMessage.ACTIONS:
            io.io_actions.broadcast('message', message.message);
        break;
        case DestinyMessage.ROOM:
            io.io_room.broadcast('message', message.message);
        break;
        case DestinyMessage.DISPLAY:
            io.io_display.broadcast('message', {
                power: cp.cpu.isOn,
                temperature: cp.cpu.temperature,
                mode: cp.cpu.mode
            });
        break;
    }
    console.log(`${message.destiny} - ${message.message}`);
});


app.use(cpRouter.routes(), cpRouter.allowedMethods());

app.listen(3000, () => {
    room = Container.get(ROOM_SERVICE);
    cp = Container.get(CONTROL_PANEL_SERVICE);
    console.log('Server running on port 3000');
});

