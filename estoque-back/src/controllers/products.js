exports.create = (req, res, next) => {
    try {
        const prod = req.body;
        prod.dataCriacao = new Date();
        console.log(prod)
        res.json(prod); //.insert(exp);
    } catch (error) {
        const erro = {
            erro: true,
            mensagem: error.message,
        }
        res.status(500);
        res.json(erro);
    }
};

exports.list = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.inventory = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.get = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.edit = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
