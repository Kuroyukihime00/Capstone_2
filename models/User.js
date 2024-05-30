// models/User.js
const connection = require('../config/db');

const User = {
  create: (data, callback) => {
    const query = 'INSERT INTO users SET ?';
    connection.query(query, data, callback);
  },
  findById: (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [id], callback);
  },
  // Tambahkan fungsi lain sesuai kebutuhan
};

module.exports = User;
