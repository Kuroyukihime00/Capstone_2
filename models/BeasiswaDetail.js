const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Mahasiswa = require('./Mahasiswa');
const Periode = require('./Periode');
const Beasiswa = require('./Beasiswa');

const BeasiswaDetail = sequelize.define('BeasiswaDetail', {
  mahasiswa_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Mahasiswa,
      key: 'id'
    }
  },
  periode_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Periode,
      key: 'id'
    }
  },
  beasiswa_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Beasiswa,
      key: 'id'
    }
  },
  ipk: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  poin_portofolio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status_1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status_2: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'beasiswa_detail'
});

module.exports = BeasiswaDetail;
