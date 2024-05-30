// models/Document.js
const connection = require('../config/db');

const Document = {
  create: (data, callback) => {
    const query = 'INSERT INTO documents SET ?';
    connection.query(query, data, callback);
  },
  findByUserId: (userId, callback) => {
    const query = 'SELECT * FROM documents WHERE user_id = ?';
    connection.query(query, [userId], callback);
  },
  // Tambahkan fungsi lain sesuai kebutuhan
};

module.exports = Document;
