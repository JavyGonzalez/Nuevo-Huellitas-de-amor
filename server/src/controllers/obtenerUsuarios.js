const { Usuario, TipoDeUsuario, Donacion } = require("../db");

// Controlador para obtener todos los usuarios de la base de datos
const getAllUsers = async (req, res) => {
	try {
		// Utiliza el método findAll de Sequelize para obtener todos los registros de la tabla "usuarios"
		const users = await Usuario.findAll();

		// Verifica si se encontraron usuarios
		if (!users || users.length === 0) {
			return res.status(404).json({ message: "No existen usuarios" });
		}

		// Devuelve los usuarios como respuesta en formato JSON
		return res.json(users);
	} catch (error) {

		 throw { status: error?.status, message: error?.message };
	}
};

module.exports = getAllUsers;

