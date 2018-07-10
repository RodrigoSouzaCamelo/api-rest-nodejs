let data = require('../models/persons.json');

exports.get = (req, res, next) => {
    res.status(200).send(data);
};

exports.post = (req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    });
    res.status(200).send('Requisição POST recebida com sucesso!');
    next();
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição PUT recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição DELETE recebida com sucesso! ${id}`);
};