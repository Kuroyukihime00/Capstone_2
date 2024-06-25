const sequelize = require("./config/database");
const Beasiswa = require("./models/Beasiswa");
const Periode = require("./models/Periode");
const Mahasiswa = require("./models/Mahasiswa");
const BeasiswaDetail = require("./models/BeasiswaDetail");
const DetailFile = require("./models/DetailFile");
const JenisDoc = require("./models/JenisDoc");

// Definisikan hubungan antar model jika diperlukan
BeasiswaDetail.belongsTo(Mahasiswa, { foreignKey: "mahasiswa_id" });
BeasiswaDetail.belongsTo(Periode, { foreignKey: "periode_id" });
BeasiswaDetail.belongsTo(Beasiswa, { foreignKey: "beasiswa_id" });

DetailFile.belongsTo(Mahasiswa, { foreignKey: "mahasiswa_id" });
DetailFile.belongsTo(Periode, { foreignKey: "periode_id" });
DetailFile.belongsTo(Beasiswa, { foreignKey: "beasiswa_id" });
DetailFile.belongsTo(JenisDoc, { foreignKey: "jenis_doc_id" });

// Sinkronisasi database
sequelize.sync({ force: true }).then(() => {
	console.log("Database & tables created!");
});
