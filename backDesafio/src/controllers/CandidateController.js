const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { nome, cargo, dataNascimento, estadoCivil, genero, cep, logradouro, numero, bairro, localidade, uf, telefone, email, rg, cpf, possuiVeiculo, habilitacaoTipo   } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.genero = genero;
        newCandidate.cep = cep;
        newCandidate.logradouro = logradouro;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.localidade = localidade;
        newCandidate.uf = uf;
        newCandidate.telefone = telefone;
        newCandidate.email = email;
        newCandidate.rg = rg;
        newCandidate.cpf = cpf;
        newCandidate.possuiVeiculo = possuiVeiculo;
        newCandidate.habilitacaoTipo = habilitacaoTipo;


        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Ocorreu um erro. Tente novamente.');
            }  
            else {
            return res.status(200).send('Salvo com sucesso!', savedCandidate)};

        });
    },



};