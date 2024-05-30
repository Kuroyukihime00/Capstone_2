// controllers/studentController.js
const Scholarship = require('../models/Scholarship');

exports.createScholarship = (req, res) => {
  const data = req.body;
  Scholarship.create(data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).send(results);
  });
};

exports.getScholarshipsByStudent = (req, res) => {
  const studentId = req.params.studentId;
  Scholarship.findByStudentId(studentId, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(results);
  });
};

// Tambahkan fungsi lain sesuai kebutuhan
