
const { Usuario } = require("../db");

const postCrearUsuario = async ({
  nombre,
  apellido,
  email,
  imagenPerfil,
  password,
}) => {
  try {
    if (!nombre || !apellido || !email || !imagenPerfil || !password) {
      return { status: 401, message: "Faltan datos" };
    }
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      apellido,
      email,
      imagenPerfil,
      password,
    });
    console.log(nuevoUsuario);
    return nuevoUsuario;
  } catch (error) {
    throw { error: error?.status, message: error?.message };
  }
};


module.exports = postCrearUsuario;
