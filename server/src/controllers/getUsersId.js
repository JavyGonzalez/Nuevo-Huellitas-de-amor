const { Usuario } = require("../db");

// Ruta para obtener un usuario por su ID
const getUsersId = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const user = await Usuario.findOne({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    
    res.status(200).json(user);
  } catch (error) {
       
    return error;
  }
};

module.exports = getUsersId;
