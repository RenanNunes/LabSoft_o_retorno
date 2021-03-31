const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const productRoute = require('./routes/productRoute');
const loginRoute = require('./routes/loginRoute');

app.use(cors());
app.use('/', index);
app.use('/login', loginRoute);
app.use('/produtos', productRoute);

//Broker
const broker = require('./broker/broker.js')
broker.sendTask("order", {"message": "Hello world from teste!"});
broker.receiveTask("order", (reply) => console.log("Processing order: ", reply), 60000);

module.exports = app;
