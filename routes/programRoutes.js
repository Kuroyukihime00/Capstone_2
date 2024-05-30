// Import dependencies
const express = require('express');
const router = express.Router();
const programController = require('../controllers/programController');

// Define routes for program management
router.post('/periods', programController.createPeriod);
router.get('/periods', programController.getAllPeriods);
router.put('/periods/:id', programController.updatePeriod);
router.get('/applications', programController.getAllApplications);
router.put('/applications/:id/approve', programController.approveApplication);
router.put('/applications/:id/reject', programController.rejectApplication);

module.exports = router;
