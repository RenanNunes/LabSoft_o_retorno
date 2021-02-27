exports.create = (req, res, next) => {
    try {
        let prod = req.body;
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
      },]
    res.json(items);
};

exports.get = (req, res, next) => {
    const id = req.params.id;
    if (id != 2) {
      prod = {
        _id: id,
        nome: 'Cenoura',
        distribuidor: 'Mercado Municipal',
        preco: '30.50',
        qtd: 100,
        descricao: 'Cenoura vendida por quilo',
        perecivel: false,
      }
    } else {
      prod = {
        erro: true
      }
    }
    console.log(prod)
    res.json(prod);
};

exports.edit = (req, res, next) => {
    let prod = req.body;
    const id = req.params.id;
    delete prod["_id"];
    // prod.update({"_id": id}, emp);
    result = {
        mensagem: "Sucesso"
    };
    res.json(result);
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    // prod.remove();
    result = {
        mensagem: "Sucesso"
    };
    res.json(result);
};
