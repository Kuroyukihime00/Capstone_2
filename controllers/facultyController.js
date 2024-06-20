// facultyController.js
const Scholarship = require('../models/Scholarship');
const Period = require('../models/Period');

// Menampilkan daftar mahasiswa yang mengajukan beasiswa per periode
exports.getScholarshipsByPeriod = (req, res) => {
  const periodId = req.params.periodId;
  Scholarship.findByPeriodId(periodId, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(results);
  });
};

// Menyetujui atau menolak pengajuan beasiswa
exports.approveScholarship = (req, res) => {
  const scholarshipId = req.params.scholarshipId;
  const status = req.body.status; // 'approved' atau 'rejected'

  Scholarship.updateStatus(scholarshipId, status, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(results);
  });
};

// Menampilkan daftar periode pengajuan beasiswa
exports.getPeriods = (req, res) => {
  Period.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(results);
  });
};

// Menambahkan periode pengajuan beasiswa baru
exports.createPeriod = (req, res) => {
  const data = req.body;
  Period.create(data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).send(results);
  });
};

// Mengubah status aktif/nonaktif periode pengajuan beasiswa
exports.togglePeriodStatus = (req, res) => {
  const periodId = req.params.periodId;
  const active = req.body.active; // true atau false

  Period.updateStatus(periodId, active, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(results);
  });
};
