const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const controller = require('../controllers/products')
const jsonParser = bodyParser.json();

router.post('/', jsonParser, controller.create);
router.get('/listar', controller.list);
router.get('/listar/:id', controller.listSeller);
router.get('/estoque', controller.inventory);
router.get('/estoque/:id', controller.inventorySeller);
router.get('/:id', controller.get);
router.put('/:id', jsonParser, controller.edit);
router.delete('/:id', controller.delete);
router.post('/comprar', jsonParser, controller.buy);

module.exports = router;
