const { Mascota } = require("../db");


//HAGO ESTO PARA QUE SOLO SE VEAN LAS MASCOTAS QUE ESTAN CON EL ESTADO "En Adopcion"

const getPets = async () => {
  try {
    const allPets = await Mascota.findAll();

    return allPets;
  } catch (error) {
    console.error("Error al obtener las mascotas:", error);
    throw { status: error?.status, message: error?.message };
  }
};

module.exports = getPets;
