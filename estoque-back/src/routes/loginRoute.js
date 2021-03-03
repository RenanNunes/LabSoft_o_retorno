const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const controller = require('../controllers/login')
const jsonParser = bodyParser.json();

router.post('/', jsonParser, controller.login);

module.exports = router;
