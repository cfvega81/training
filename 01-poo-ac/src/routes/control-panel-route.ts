import { CONTROL_PANEL_SERVICE } from 'data';
import * as Router from 'koa-router';
import Container from 'typedi';

const cpRouter = new Router();
const cp = Container.get(CONTROL_PANEL_SERVICE);

cpRouter.post('/api/on', async (ctx) => {   
    cp.turnOn();
    ctx.status = 200;
});

cpRouter.post('/api/off', async (ctx) => {   
    cp.turnOff();
    ctx.status = 200;
});

cpRouter.post('/api/inc', async (ctx) => {   
    cp.incrementTemperature();
    ctx.status = 200;
});

cpRouter.post('/api/dec', async (ctx) => {   
    cp.decrementTemperature();
    ctx.status = 200;
});

cpRouter.post('/api/mode', async (ctx) => {   
    cp.toggleBlades();
    ctx.status = 200;
});

module.exports = cpRouter;