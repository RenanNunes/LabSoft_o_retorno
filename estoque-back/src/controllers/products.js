const db = require('./connection');

const products = db.get('produtos')

exports.create = (req, res, next) => {
    try {
        let prod = req.body;
        prod.dataCriacao = new Date();
        prod.qtd = parseInt(prod.qtd);
        prod.preco = parseFloat(prod.preco);
        prod.perecivel = (prod.perecivel === 'true');
        products.insert(prod);
        res.json(prod);
    } catch (error) {
        const erro = {
            erro: true,
            mensagem: error.message,
        };
        res.status(500);
        res.json(erro);
    }
};

exports.list = async (req, res, next) => {
    items = await products.find();
    res.json(items);
};

exports.listSeller = async (req, res, next) => {
    const id = req.params.id;
    items = await products.find({ "idConta": id });
    res.json(items);
};

exports.inventory = async (req, res, next) => {
    items = await products.find({ "qtd": { $gt: 0 } });
    res.json(items);
};

exports.inventorySeller = async (req, res, next) => {
    const id = req.params.id;
    items = await products.find({ $and : [{ "idConta": id }, { "qtd": { $gt: 0 } }]});
    res.json(items);
};

exports.get = async (req, res, next) => {
    const id = req.params.id;
    item = await products.find({ "_id": id });
    if (item.length == 0) {
        prod = {
            erro: true
        };
    } else {
        prod = item[0];
    }
    res.json(prod);
};

exports.edit = async (req, res, next) => {
    let prod = req.body;
    const id = req.params.id;
    delete prod["_id"];
    prod.qtd = parseInt(prod.qtd);
    prod.preco = parseFloat(prod.preco);
    prod.perecivel = (prod.perecivel === 'true');
    result = await products.update({ "_id": id }, { $set: prod });
    result = {
        mensagem: "Sucesso"
    };
    res.json(result);
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    products.remove({ "_id": id });
    result = {
        mensagem: "Sucesso"
    };
    res.json(result);
};

exports.buy = async (req, res, next) => {
    let prods = req.body && req.body.data;
    try {
        let products_available = true;
        let msg = {};
        let i;
        // verify qtd available and qtd requested
        for (i = 0; i < prods.length; i++) {
            item = await products.find({ "_id": prods[i]['product'] && prods[i]['product']['id'] });
            if (item.length == 0) {
                products_available = false;
                break;
            } else {
                if (item[0].qtd < prods[i]['quantity']) {
                    products_available = false;
                    break;
                }
            }
        }
        if (products_available == true) {
            // if qtd is enough, update the inventory
            for (i = 0; i < prods.length; i++) {
              result = await products.update({ "_id": prods[i]['product'] && prods[i]['product']['id'] }, { $inc: { 'qtd': -prods[i]['quantity'] }});
            }
            msg = {
                erro: false,
                mensagem: 'Atualizado com sucesso',
            };
        } else {
            msg = {
                erro: true,
                mensagem: 'Não temos a quantidade de produtos requisitada em estoque',
            };
        }
        res.status(200);
        res.json(msg);

    } catch (error) {
        const erro = {
            erro: true,
            mensagem: error.message,
        };
        res.status(500);
        res.json(erro);
    }
}
