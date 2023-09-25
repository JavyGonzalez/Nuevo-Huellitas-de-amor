const { Usuario, TipoDeUsuario, Donacion, Mascota} = require("../db");

const getUsers = async () => {
	try {
		const users = await Usuario.findAll({
			include: [
				{
					model: TipoDeUsuario,
					// Alias opcional para TipoDeUsuario
				},
				{
					model: Donacion,
					// Alias opcional para Donaciones
				},
				{
					model: Mascota,
					// Alias opcional para Donaciones
				},
			],
			raw: true, // Debe estar aquí, no dentro de include
		});

		console.log(users);
		return users;
	} catch (error) {
		console.error("Error al obtener los usuarios:", error);
		throw new Error("Error al obtener los usuarios.");
	}
};

module.exports = getUsers;

