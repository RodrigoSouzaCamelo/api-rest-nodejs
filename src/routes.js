const express = require('express');
const routes = express.Router();

const personController = require('./controllers/PersonController');

// Person Routes
routes.get('/people', personController.index);
routes.post('/person', personController.store);
routes.put('/person/:id', personController.update);
routes.delete('/person/:id', personController.delete);


module.exports = routes;