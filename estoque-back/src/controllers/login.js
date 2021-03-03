exports.login = (req, res, next) => {
    try {
        let login = req.body;
        if (login.user == 'email' && login.senha == 'senha') {
            res.json({'token': '1'});
        } else if (login.user == 'email2' && login.senha == 'senha2') {
            res.json({'token': '2'});
        }
        throw new Error('Email ou senha inválidos')
    } catch (error) {
        const erro = {
            erro: true,
            mensagem: error.message,
        };
        res.status(500);
        res.json(erro);
    }
};