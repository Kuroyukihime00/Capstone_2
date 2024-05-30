const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');

// Route untuk melihat daftar mahasiswa yang mengajukan beasiswa per periode
router.get('/applications/:periodId', facultyController.getApplicationsByPeriod);

// Route untuk menyetujui pengajuan beasiswa
router.put('/applications/approve/:applicationId', facultyController.approveApplication);

module.exports = router;
