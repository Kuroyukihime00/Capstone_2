const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Mahasiswa = sequelize.define('Mahasiswa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'mahasiswa'
});

module.exports = Mahasiswa;
