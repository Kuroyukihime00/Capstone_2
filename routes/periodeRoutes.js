// routes/periodeRoutes.js
const express = require('express');
const router = express.Router();
const periodeController = require('../controllers/periodeController');

router.post('/periode', periodeController.createPeriode);
router.get('/periodes', periodeController.getAllPeriode);

module.exports = router;
