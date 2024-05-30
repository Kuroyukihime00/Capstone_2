// models/Scholarship.js
const connection = require('../config/db');

const Scholarship = {
  create: (data, callback) => {
    const query = 'INSERT INTO scholarships SET ?';
    connection.query(query, data, callback);
  },
  findByStudentId: (studentId, callback) => {
    const query = 'SELECT * FROM scholarships WHERE student_id = ?';
    connection.query(query, [studentId], callback);
  },
  // Tambahkan fungsi lain sesuai kebutuhan
};

module.exports = Scholarship;
