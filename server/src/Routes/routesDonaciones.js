const { Router } = require("express");
const router = Router();

const getAllDonations = require('../controllers/getAllDonations')
const fillDonations = '../utils/fillDonations'
const donationsUserSelect = require('../controllers/donationsUserSelect')


router.get("/", async(req,res) => {
  try{
    const data = await getAllDonations()

    return res.status(200).json(data)
  }catch(error){
    res.status(500).json({message: error.message})
  }
})

router.get('/usuario', async(req, res) => {
  try{
    const donacion = await donationsUserSelect()
    return res.status(200).json(donacion)
  } catch(error){
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
})

router.get("/fill",  async (req, res) => {
  try {

    const getFill = () => fillDonations()
    
     getFill()

    res.status(200).json({ message: 'Datos de donaciones llenados exitosamente' });
  } catch (error) {
    console.log('Error al llenar los datos:', error);
    res.status(500).json({ error: 'Error al llenar los datos de las donaciones' });
  }
})

	module.exports = router;