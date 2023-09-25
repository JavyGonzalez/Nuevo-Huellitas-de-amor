const {Usuario, TipoDeUsuario, Donacion} = require('../db')

const findTypeUsers = async() => {
	
	try {
    // Busca el usuario por ID junto con su TipoDeUsuario asociado
    const usuarios = await Usuario.findAll({
      include: [
        {
          model: TipoDeUsuario,
           // Alias opcional para TipoDeUsuario
        },
        {
          model: Donacion,
         // Alias opcional para Donaciones
        },
      ],
    });

    return usuarios;
  } catch (error) {
    console.error('Error al obtener el usuario con TipoDeUsuario:', error);
    return { error: `Error interno del servidor. ${error.message}` };
  }
}

module.exports = findTypeUsers