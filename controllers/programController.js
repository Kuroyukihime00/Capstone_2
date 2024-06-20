// models/Scholarship.js
const Scholarship = require('../models/Scholarship');
const User = require('../models/User');

exports.getApplicationsByProgram = (req, res) => {
  const programId = req.params.programId;
  // Misalkan programId adalah ID dari program studi yang sedang login
  // Anda dapat menyesuaikan logika sesuai kebutuhan aplikasi
  Scholarship.findByProgramId(programId, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(results);
  });
};

exports.approveScholarship = (req, res) => {
  const scholarshipId = req.params.scholarshipId;
  const programId = req.body.programId;
  // Misalkan programId adalah ID dari program studi yang sedang login
  // Anda dapat menyesuaikan logika sesuai kebutuhan aplikasi
  Scholarship.findById(scholarshipId, (err, scholarship) => {
    if (err) return res.status(500).send(err);
    if (!scholarship) return res.status(404).send({ message: 'Scholarship not found' });

    // Periksa apakah scholarship sudah disetujui oleh fakultas
    if (scholarship.status !== 'pending') {
      return res.status(400).send({ message: 'Scholarship is not pending for approval' });
    }

    // Lakukan proses approval
    scholarship.status = 'approved';
    scholarship.approvedBy = programId; // Simpan ID program studi yang menyetujui
    scholarship.save((err, updatedScholarship) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(updatedScholarship);
    });
  });
};

// Tambahkan fungsi lain sesuai kebutuhan
