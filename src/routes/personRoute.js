const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController')

router.get("/persons", controller.get);
router.post('/person', controller.post);
router.put('/person/:id', controller.put);
router.delete('/person/:id', controller.delete);

module.exports = router;