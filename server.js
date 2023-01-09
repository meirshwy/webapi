require ('dotenv').config();
const app = require('./app');
const port = 5050;
const server = require ('http').createServer(app);
server.listen(port,()=>{console.log('server started')});