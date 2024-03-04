import * as Koa from 'koa';
import * as cors from '@koa/cors';
import * as bodyParser from 'koa-bodyparser';
import * as serve from 'koa-static';

const path = require('path');   
const app = new Koa();

const appDir = path.join(__dirname, '/public');
console.log(appDir); 

app.use(cors());
app.use(bodyParser());  
app.use(serve(appDir));

module.exports = app;