const express = require('express');
const routes = express.Router();

const personController = require('./controllers/PersonController');

// Person Routes
routes.get('/Person', personController.index);
routes.post('/Person', personController.store);
routes.put('/Person', personController.update);
routes.delete('/Person', personController.delete);


module.exports = routes;