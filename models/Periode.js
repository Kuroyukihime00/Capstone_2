const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Periode = sequelize.define('Periode', {
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
  tableName: 'periode'
});

module.exports = Periode;
