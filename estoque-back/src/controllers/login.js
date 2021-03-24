exports.login = (req, res, next) => {
    try {
        let login = req.body;
        if (login.user == 'f' && login.senha == '36604790264510799ac024e3ecdf66156b84607eb99fefcde5db07a39d31122d') {
            res.json({'token': '1'});
        } else if (login.user == 'ff' && login.senha == '36604790264510799ac024e3ecdf66156b84607eb99fefcde5db07a39d31122d') {
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
