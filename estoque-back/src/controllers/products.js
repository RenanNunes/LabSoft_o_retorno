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

exports.inventory = async (req, res, next) => {
    items = await products.find({ "qtd": { $gt: 0 } });
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
