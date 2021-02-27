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
    items = [
      {
        idProduto: 1,
        nome: 'Cenoura',
        distribuidor: 'Mercado Municipal',
        preco: '30.50',
        qtd: 100,
        descricao: 'Cenoura vendida por quilo',
        perecivel: false,
      },
      {
        idProduto: 2,
        nome: 'Tomate',
        distribuidor: 'Mercado Municipal',
        preco: '10.50',
        qtd: 80,
        descricao: 'Tomate vendido por quilo',
        perecivel: true,
      },
      {
        idProduto: 3,
        nome: 'Banana',
        distribuidor: 'Mercado Municipal',
        preco: '11',
        qtd: 12,
        descricao: 'Banana vendida por dúzia',
        perecivel: true,
      },
      {
        idProduto: 3,
        nome: 'Uva',
        distribuidor: 'Mercado Municipal',
        preco: '6.70',
        qtd: 0,
        descricao: 'Uva vendida por dúzia',
        perecivel: true,
      },];
    res.json(items);
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
