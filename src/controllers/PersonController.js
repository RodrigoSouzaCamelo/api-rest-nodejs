const personModel = require('../models/Person');
const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}

module.exports = {
    index(req, res, next){
        res.set(cors);
        
        personModel.getAll().then((result) => {
            res.status(200).json(result);
        }, (err) => {
            res.status(500).json(err);
        });
    },

    store(req, res) {
        const person = req.body;
        
        res.set(cors);

        personModel.create(person).then((result) => {
            res.status(200).json(result);
        }, (err) => {
            res.status(500).json(err);
        });
    },

    update(req, res) {
        const { id } = req.params;
        const person = req.body;

        personModel.update(id, person).then((result) => {
            res.status(200).json(result);
        }, (err) => {
            res.status(500).json(err);
        });
    },

    delete(req, res) {
        const { id } = req.params;

        personModel.delete(id).then((result) => {
            res.status(200).json(result);
        }, (err) => {
            res.status(500).json(err);
        });
    },
}