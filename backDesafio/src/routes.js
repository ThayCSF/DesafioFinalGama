const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const routes = new express.Router();

routes.post('/register', CandidateController.register);
routes.get('/', (req, res) => {
    res.send('Uh oh, você deve estar buscando por /register');
});
module.exports = routes;