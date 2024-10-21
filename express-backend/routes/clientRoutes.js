const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Route to create a new client
router.post('/', clientController.createClient);

module.exports = router;
