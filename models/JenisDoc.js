const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const JenisDoc = sequelize.define('JenisDoc', {
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
  tableName: 'jenis_doc'
});

module.exports = JenisDoc;
