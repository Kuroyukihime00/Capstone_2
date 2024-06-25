const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Scholarship = sequelize.define(
	"Scholarship",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		studentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		programId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		status: {
			type: DataTypes.STRING,
			defaultValue: "pending",
		},
		approvedBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		tableName: "scholarships",
	}
);

module.exports = Scholarship;
