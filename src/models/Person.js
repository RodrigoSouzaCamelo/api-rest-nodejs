const db = require('../database/database');

exports.getAll = () => {
    return db('People').select();
}

exports.create = (person) => {
    return db('People').insert(person);
}

exports.update = (id, person) => {
    return db('People').where({ id: id }).update(person);
}

exports.delete = (id) => {
    return db('People').where({ id: id }).del();
}