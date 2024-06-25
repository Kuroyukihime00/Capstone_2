const Scholarship = require("../models/Scholarship");

exports.getApplicationsByPeriod = async (req, res) => {
	try {
		const periodId = req.params.periodId;
		const applications = await Scholarship.findAll({ where: { periodId } });
		res.status(200).json(applications);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.approveApplication = async (req, res) => {
	try {
		const applicationId = req.params.applicationId;
		const scholarship = await Scholarship.findByPk(applicationId);

		if (!scholarship) {
			return res.status(404).json({ message: "Scholarship not found" });
		}

		if (scholarship.status !== "pending") {
			return res
				.status(400)
				.json({ message: "Scholarship is not pending for approval" });
		}

		scholarship.status = "approved";
		scholarship.approvedBy = req.body.programId;
		await scholarship.save();

		res.status(200).json(scholarship);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
