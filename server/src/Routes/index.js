const express = require("express");
const router = express.Router();
const mascotas = require("./routesMascotas");
const getPetById = require("../controllers/getPetById");
const postPetById = require("../controllers/postPetById");
const getPetByName = require("../controllers/getPetsByName");
const filtradoMascotas = require("../controllers/filtradoMascotas");
const getPets = require("../controllers/getPets");
const postCasaAdopcion = require("./routesCasaDeAdopcion");
const postCasaDeAdopcion = require("../controllers/postCasaDeAdopcion");
const postSendEmail = require("../controllers/postSendEmail");
const postMercadoPago = require("../controllers/postMercadoPago");
const fillDonations = require("../controllers/fillDonations");
const fillPets = require("../utils/fillPets");
const postDonaciones = require("./routesDonaciones");
const postCrearUsuario = require("./routesUsuario");
const getUsersId = require("../controllers/getUsersId");
const getAdoptionUser = require("../controllers/getAdoptionUser");
const modPetById = require("../controllers/modPetById");
const findTypesUsers = require("../controllers/findTypeUsers");
const fillTypeUsers = require("../utils/fillTypeUsers");
const usuarioTipoController = require("../controllers/usuarioTipoController");
const donationsUser = require("../controllers/donationsUser");
const donationsHouse = require("../controllers/donationsHouse");
const {formularioAdopt} = require("../controllers/FormularioAdop");
const getUsers = require("../controllers/getUsers");


router.patch("/relacion-user-type", usuarioTipoController);
router.use("/donaciones", postDonaciones);
router.get("/relacion-donation-house", donationsHouse);
router.get("/relacion-donation-user", donationsUser);
router.get('/usuarios', getUsers)
router.delete("/usuarios/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const userId = await deleteUsersById(id);
		return res.status(200).json(userId);
	} catch (error) {
		return res.status(500).json({ mensaje: "Error en el servidor" });
	}
});
router.patch("/usuarios/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = req.body;
        console.log(response);
        const userId = await modUserById(id, response);
        return res.status(200).json(userId);
    } catch (error) {
        return res.status(500).json({ mensaje: "Error en el servidor" })
    }
}) 



router.get("/perfil/:id", getUsersId);
router.get("/tiposDeUsuarios", findTypesUsers);
router.get("/relacion", usuarioTipoController);
router.get("/perfil/:id", getUsersId);
router.use("/casaDeAdopcion", postCasaAdopcion);
router.post("/email", postSendEmail);
router.get("/fillDonations", fillDonations);
router.get("/fillPets", fillPets);
router.get("/fillTypeUsers", fillTypeUsers);
router.post("/crearUsuario", postCrearUsuario);
router.use("/donaciones", postDonaciones);
router.use("/mascotas", mascotas);
router.get("/", getPets);
router.get("/nombre", getPetByName);
router.get("/:id", getPetById);
router.get("/filtro", filtradoMascotas);
router.post("/", postPetById);
router.post("/create_preference", postMercadoPago);
router.use("/usuario", postCrearUsuario);
router.post("/usuario", postCrearUsuario);

router.put("/:id/estado", modPetById);
router.get("/adopcion/:usuarioId", getAdoptionUser);
router.get("/formadop", formularioAdopt);

module.exports = router;
