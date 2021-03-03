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

module.exports = app;
