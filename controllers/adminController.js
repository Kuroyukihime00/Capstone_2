// models
const User = require('../models/User');
const Scholarship = require('../models/Scholarship');
const Period = require('../models/Period');

// Menambahkan data fakultas
exports.addFaculty = (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, role: 'faculty', password }; // Default role for faculty
  User.create(newUser, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send(result);
  });
};

// Menambahkan data program studi
exports.addProgram = (req, res) => {
  const { name, facultyId } = req.body;
  const newProgram = { name, faculty_id: facultyId }; // Assuming faculty_id is a foreign key in programs table
  Program.create(newProgram, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send(result);
  });
};

// Menambahkan jenis beasiswa internal
exports.addScholarshipType = (req, res) => {
  const { name, description } = req.body;
  const newScholarshipType = { name, description };
  ScholarshipType.create(newScholarshipType, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send(result);
  });
};

// Menambahkan periode pengajuan beasiswa
exports.addScholarshipPeriod = (req, res) => {
  const { startDate, endDate } = req.body;
  const newPeriod = { start_date: startDate, end_date: endDate, active: false }; // By default, new period is not active
  Period.create(newPeriod, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send(result);
  });
};
