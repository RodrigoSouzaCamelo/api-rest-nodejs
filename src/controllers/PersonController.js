let data = require('../models/persons.json');
const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}

module.exports = {
    index(req, res, next){
        res.set(cors);
        res.status(200).json(data);
    },

    store(req, res, next) {
        res.set(cors);
        res.status(200).send('Requisição POST recebida com sucesso!');
        next();
    },

    update(req, res, next) {
        const id = req.params.id;
        res.status(200).send(`Requisição PUT recebida com sucesso! ${id}`);
    },

    delete(req, res, next) {
        const id = req.params.id;
        res.status(200).send(`Requisição DELETE recebida com sucesso! ${id}`);
    },
}