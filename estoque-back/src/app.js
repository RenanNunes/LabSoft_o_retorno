const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const testRoute = require('./routes/testRoute');

app.use('/', index);
app.use('/test', testRoute);

module.exports = app;
