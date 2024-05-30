// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/scholarships', studentController.createScholarship);
router.get('/scholarships/:studentId', studentController.getScholarshipsByStudent);

// Tambahkan route lain sesuai kebutuhan
module.exports = router;
