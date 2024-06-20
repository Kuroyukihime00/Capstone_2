const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Mahasiswa = require('./Mahasiswa');
const Periode = require('./Periode');
const Beasiswa = require('./Beasiswa');
const JenisDoc = require('./JenisDoc');

const DetailFile = sequelize.define('DetailFile', {
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
  jenis_doc_id: {
    type: DataTypes.INTEGER,
    references: {
      model: JenisDoc,
      key: 'id'
    }
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'detail_file'
});

module.exports = DetailFile;
