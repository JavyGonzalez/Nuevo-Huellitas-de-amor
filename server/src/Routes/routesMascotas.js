const { Router } = require("express");
const router = Router();
const getPetById = require("../controllers/getPetById");
const postPetById = require("../controllers/postPetById");
const getPets = require("../controllers/getPets");
const getPetByName = require("../controllers/getPetsByName");
const filtradoMascotas = require("../controllers/filtradoMascotas");
const modPetById = require('../controllers/modPetById')
const deletePetById = require('../controllers/deletePetById')
const fillPets = require('../utils/fillPets')
const modCompletePet = require('../controllers/modCompletePet')



router.get("/filtro", async (req, res) => {
  try {
    const mascotasFiltradas = await filtradoMascotas(req);
    if (mascotasFiltradas.status) {
      return res
        .status(mascotasFiltradas.status)
        .json({ message: mascotasFiltradas.message });
    }
    return res.status(200).json(mascotasFiltradas);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
      const allPets = await getPets();
      return res.status(200).json(allPets);
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
});


router.get("/nombre", async (req, res) => {
  try {
    const { nombre } = req.query;
    const petByName = await getPetByName(nombre);
    return res.status(200).json(petByName);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const response = req.body;
    const petPost = await postPetById(response);
    res.status(200).json(petPost);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const petId = await getPetById(id);
    res.status(200).json(petId);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = req.body
    console.log(req.body)
    const petId =  await modPetById(id, response);
    return res.status(200).json(petId);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const petId =  await deletePetById(id);
    return res.status(200).json(petId);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
});
//Esta ruta es para actualizar el estado y la visibilidad de una mascota(nacho)
router.put("/:id/estado", async (req, res) => {
  try {
    const { id } = req.params;
    const { estado, visible } = req.body;

    const result = await modPetById(id, { estado, visible });
    
    if (result.error) {
      return res.status(404).json({ mensaje: result.mensaje });
    } else {
      return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
});



router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = req.body
    console.log(response)
    const mascotaId =  await modCompletePet(id, response);
    return res.status(200).json(mascotaId);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
});


module.exports = router;
