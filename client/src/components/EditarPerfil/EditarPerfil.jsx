import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import FormTextarea from "../FormTextarea/FormTextarea";
import { Button } from "@nextui-org/button";
import { Formik, Form, Field, ErrorMessage } from "formik";

const EditarPerfil = () => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",

    email: "",
    password: "",
    nacionalidad: "",
    ubicacion: "",
    direccion: "",
    telefono: "",
    acerca: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar los datos actualizados al servidor o almacenarlos localmente.
    console.log("Datos actualizados:", datos);
    // Cierra el formulario de edición después de guardar.
    //Estado para controlar si se muestra o no.
  };

  const initialValues = {
    nombre: "",
    apellido: "",

    email: "",
    password: "",

    nacionalidad: "",
    ubicacion: "",
    direccion: "",
    telefono: "",
    acerca: "",


  };

  return (
    <div className="flex flex-col items-center">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // enableReinitialize={true}
      >
        {({ isSubmitting, values }) => (
          <Form onSubmit={handleSubmit}>
            {/* <div>
              <h1>Registrate</h1>
            </div> */}
            <div>
              <FormInput
                label="Nombre"
                name="nombre"
                placeholder="Nombre"
                values="datos.nombre"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                label="Apellido"
                name="apellido"
                placeholder="Apellido"
                values="datos.apellido"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                label="Nacionalidad"
                name="nacionalidad"
                placeholder="Nacionalidad"
                values="datos.nacionalidad"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                label="Ubicación"
                name=" ubicacion"
                placeholder="Ubicación"
                values="datos.nombre"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                label="Direccion"
                name="direccion"
                placeholder="Direccion"
              />
            </div>
            <div>
              <FormInput
                label="Telefono"
                name="telefono"
                placeholder="Telefono"
              />
            </div>
            <div>
              <FormTextarea
                placeholder="Realiza una descripción..."
                label="Acerca De:"
                name="acerca"
              />
            </div>
            <div>
              <FormInput placeholder="Email" label="Email" name="email" />
            </div>
            <div>
              <FormInput
                placeholder="Contraseña"
                label="Contraseña"
                name="password"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="border border-black text-black hover:bg-slate-100 mt-8 bg-inherit mb-4"
              size="lg"
            >
              Guardar Cambios
            </Button>
          </Form>
        )}
      </Formik>
      {/*  */}
    </div>
  );
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="nombre">Nombre:</label>
  //         <input
  //           type="text"
  //           id="nombre"
  //           name="nombre"
  //           value={datos.nombre}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="apellido">Apellido:</label>
  //         <input
  //           type="text"
  //           id="apellido"
  //           name="apellido"
  //           value={datos.apellido}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="apellido">Apellido:</label>
  //         <input
  //           type="text"
  //           id="apellido"
  //           name="apellido"
  //           value={datos.apellido}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       {/* Repite este patrón para otros campos */}
  //       <button type="submit">Guardar Cambios</button>
  //     </form>
};

export default EditarPerfil;
