const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Beasiswa = sequelize.define('Beasiswa', {
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
  tableName: 'beasiswa'
});

module.exports = Beasiswa;
