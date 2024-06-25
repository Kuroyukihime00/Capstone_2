const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
	"scholarship_db",
	"your_mysql_username",
	"your_mysql_password",
	{
		host: "localhost",
		dialect: "mysql",
	}
);

// Definisikan model-model Sequelize Anda di sini
const Beasiswa = sequelize.define(
	"Beasiswa",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nama: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "beasiswa",
	}
);
const BeasiswaDetail = sequelize.define(
	"BeasiswaDetail",
	{
		mahasiswa_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Mahasiswa,
				key: "id",
			},
		},
		periode_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Periode,
				key: "id",
			},
		},
		beasiswa_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Beasiswa,
				key: "id",
			},
		},
		ipk: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		poin_portofolio: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		status_1: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status_2: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "beasiswa_detail",
	}
);
const DetailFile = sequelize.define(
	"DetailFile",
	{
		mahasiswa_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Mahasiswa,
				key: "id",
			},
		},
		periode_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Periode,
				key: "id",
			},
		},
		beasiswa_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Beasiswa,
				key: "id",
			},
		},
		jenis_doc_id: {
			type: DataTypes.INTEGER,
			references: {
				model: JenisDoc,
				key: "id",
			},
		},
		path: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "detail_file",
	}
);
const Document = {
	create: (data, callback) => {
		const query = "INSERT INTO documents SET ?";
		connection.query(query, data, callback);
	},
	findByUserId: (userId, callback) => {
		const query = "SELECT * FROM documents WHERE user_id = ?";
		connection.query(query, [userId], callback);
	},
	// Tambahkan fungsi lain sesuai kebutuhan
};
const JenisDoc = sequelize.define(
	"JenisDoc",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nama: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "jenis_doc",
	}
);
const Mahasiswa = sequelize.define(
	"Mahasiswa",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nama: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "mahasiswa",
	}
);
const Periode = sequelize.define("Periode", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nama: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});
const PeriodeBeasiswa = sequelize.define(
	"PeriodeBeasiswa",
	{
		periode_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Periode,
				key: "id",
			},
		},
		beasiswa_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Beasiswa,
				key: "id",
			},
		},
		start: DataTypes.DATE,
		end: DataTypes.DATE,
		active: DataTypes.BOOLEAN,
	},
	{
		tableName: "periode_beasiswa",
		timestamps: false,
	}
);
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
const User = {
	create: (data, callback) => {
		const query = "INSERT INTO users SET ?";
		connection.query(query, data, callback);
	},
	findById: (id, callback) => {
		const query = "SELECT * FROM users WHERE id = ?";
		connection.query(query, [id], callback);
	},
	// Tambahkan fungsi lain sesuai kebutuhan
};

// Sinkronkan model-model Anda dengan database
sequelize.sync();
