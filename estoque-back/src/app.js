const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const productRoute = require('./routes/productRoute');

app.use(cors());
app.use('/', index);
app.use('/produtos', productRoute);

module.exports = app;
