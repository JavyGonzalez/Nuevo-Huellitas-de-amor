const PathRoutes = {
  // LANDINGPAGE: "/",
  HOME: "/",
  FILTER: "/mascotas",
  PERFIL: "/perfil/:id",
  DETAIL: "/detail/:id",
  AGREGAR: "/agregar",
  REGISTRO: "/registro",
  // LOGIN: "/login",
  CASADETAIL: "/casaDeAdopcion/:id",
  NOTIFICACION: "/notificaciones",

  //Ruta para el dashboard principal
  DASHBOARD: "/dashboard",
  //Sub ruta para el dashboard de mascotas
  DASHBOARD_MASCOTAS: "/dashboard/mascotas",
  //Sub ruta para el dashboard de usuarios
  DASHBOARD_USUARIOS: "/dashboard/usuarios",
  //subruta para el dashboard de casas de adopcion
  DASHBOARD_CASAS_DE_ADOPCION: "/dashboard/casas-de-adopcion",
  //subruta para el dashboard de casas de adopcion
  DASHBOARD_DONACIONES: "/dashboard/donaciones",

  DETAILUSER: "/detail-user/:id",
  DETAILHOUSE: "/detail-house-of-adoption/:id",
};

export default PathRoutes;
