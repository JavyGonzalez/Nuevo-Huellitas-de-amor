require("dotenv").config();
const server = require("./src/app.js");
const fillDonations = require("./src/controllers/fillDonations.js");
const { conn } = require("./src/db.js");
const fillHomes = require("./src/utils/fillHomes.js");
const fillPets = require("./src/utils/fillPets.js");
const llenarUsuario = require("./src/utils/llenarUsuario.js");


const PORT = 3001;

// Syncing all the models at once.

conn
  .sync({
    force: false
    ,
  })
  .then(() => {
    server.listen(PORT, () => {
      fillHomes();
      llenarUsuario();
      fillDonations();
      fillPets();
      console.log(`Servidor Huellitas arriba en:  ${PORT}`); // eslint-disable-line no-console
    });
  });
