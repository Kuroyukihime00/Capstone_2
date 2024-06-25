const Scholarship = require("../models/Scholarship");

exports.createScholarship = async (req, res) => {
	try {
		const data = req.body;
		const scholarship = await Scholarship.create(data);
		res.status(201).json(scholarship);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getScholarshipsByStudent = async (req, res) => {
	try {
		const studentId = req.params.studentId;
		const scholarships = await Scholarship.findAll({ where: { studentId } });
		res.status(200).json(scholarships);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
