const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Endpoint untuk menambahkan data fakultas
router.post('/faculties', adminController.addFaculty);

// Endpoint untuk menambahkan data program studi
router.post('/programs', adminController.addProgram);

// Endpoint untuk menambahkan data pengguna aplikasi web
router.post('/users', adminController.addUser);

// Endpoint untuk menambahkan data jenis beasiswa internal
router.post('/scholarship-types', adminController.addScholarshipType);

module.exports = router;
