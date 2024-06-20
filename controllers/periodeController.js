// controllers/periodeController.js
const Periode = require('../models/Periode');

exports.createPeriode = async (req, res) => {
  try {
    const periode = await Periode.create(req.body);
    res.status(201).json(periode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPeriode = async (req, res) => {
  try {
    const periodes = await Periode.findAll();
    res.status(200).json(periodes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
