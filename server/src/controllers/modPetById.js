
const { Mascota } = require("../db.js");

const modPetById = async (id, updatedData) => {

  try {
    // Buscamos la mascota por su ID en la base de datos
    const mascota = await Mascota.findByPk(id);

    if (!mascota) {
      return { error: true, mensaje: "Mascota no encontrada" };//para que devuelva un objeto o mensaje específico cuando no se encuentra la mascota, y luego manejar ese resultado en tu ruta.
    }
    console.log("Datos antes de actualizar:", mascota.dataValues);
    // Actualizamos las propiedades con los nuevos datos
    Object.keys(updatedData).forEach(key => {
      mascota[key] = updatedData[key];
      console.log("Datos después de actualizar:", mascota.dataValues);
    });

    // Guardamos los cambios en la base de datos
    await mascota.save();

    return { mensaje: "Propiedades modificadas exitosamente" }
  } catch (error) {

    return { mensaje: "Error en el servidor" }
  }
}

module.exports = modPetById;

