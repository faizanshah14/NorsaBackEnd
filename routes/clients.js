const express = require('express');
const router = express.Router();
const clients = require('../controllers/clients');


router.get('/getAllClients', clients.getAllClients);
router.get('/getClientById/:id', clients.getClientById);
module.exports = router;
