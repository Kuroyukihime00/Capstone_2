const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Periode = require('./Periode');
const Beasiswa = require('./Beasiswa');

const PeriodeBeasiswa = sequelize.define('PeriodeBeasiswa', {
  periode_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Periode,
      key: 'id',
    },
  },
  beasiswa_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Beasiswa,
      key: 'id',
    },
  },
  start: DataTypes.DATE,
  end: DataTypes.DATE,
  active: DataTypes.BOOLEAN,
}, {
  tableName: 'periode_beasiswa',
  timestamps: false,
});

Periode.belongsToMany(Beasiswa, { through: PeriodeBeasiswa });
Beasiswa.belongsToMany(Periode, { through: PeriodeBeasiswa });

module.exports = PeriodeBeasiswa;
