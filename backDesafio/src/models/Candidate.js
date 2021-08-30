const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    dataNascimento: { type: String, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: true },
    genero: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    localidade: { type: String, unique: false, required: true },
    uf: { type: String, unique: false, required: true },
    telefone: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    rg: { type: String, unique: true, required: true },
    cpf: { type: String, unique: true, required: true },
    possuiVeiculo: { type: String, unique: false, required: true },
    habilitacaoTipo: { type: String, unique: false, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);