const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const controller = require('../controllers/products')
const jsonParser = bodyParser.json();

router.post('/', jsonParser, controller.create);
router.get('/listar', controller.list);
router.get('/estoque', controller.inventory);
router.get('/:id', controller.get);
router.put('/:id', controller.edit);
router.delete('/:id', controller.delete);

module.exports = router;
