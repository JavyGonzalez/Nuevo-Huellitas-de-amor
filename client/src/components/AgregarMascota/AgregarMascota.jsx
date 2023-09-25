import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@nextui-org/react";
import styles from "./AgregarMascota.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addMascota,
  eliminarImagenes,
  limpiarImagenes,
} from "../../redux/actions";
import FormInput from "../FormInput/FormInput";
import FormTextarea from "../FormTextarea/FormTextarea";
import FormSelect from "../FormSelect/FormSelect";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SubirImagenes from "../SubirImagenes/SubirImagenes";
import agregarMascotaSchema from "../../Schemas/agregarMascotaSchema";
import AgregarMascotaRender from "./AgregarMascotaRender";

const validationSchema = agregarMascotaSchema;

const AgregarMascota = () => {
  const [mascota, setMascota] = useState({
    nombre: "",
    especie: "",
    edad: 0,
    tamano: "",
    peso: 0,
    descripcion: "",
    foto: [],
    raza: "",
    sexo: "",
  });

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const imagenes = useSelector((state) => state.imagenes);
  const dispatchRedux = (mascota) => {
    const nuevaMascota = { ...mascota };
    nuevaMascota.foto = [...nuevaMascota.foto, ...imagenes];
    dispatch(addMascota(nuevaMascota));
    Navigate("/");
    dispatch(limpiarImagenes());
  };

  const handleSubmit = (mascota) => {
    Swal.fire({
      title: "¿Deseas agregar a la siguiente mascota?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Agregar",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(
          "Felicidades, esperamos que consiga un hogar muy pronto",
          "",
          "success"
        );
        localStorage.removeItem("formData");
        dispatchRedux(mascota);
      } else if (result.isDenied) {
        Swal.fire("La mascaota no ha sido agregada", "", "info");
      }
    });
  };

  const handleFormChange = (values) => {
    localStorage.setItem("formData", JSON.stringify(values));
    // localStorage.setItem("imagenes",JSON.stringify(imagenes))
  };

  const handleClickImages = async (clickedImage) => {
    // console.log(clickedImage);
    const updatedImages = imagenes.filter((image) => image !== clickedImage);
    dispatch(eliminarImagenes(updatedImages));
    /* console.log(updatedImages) */
  };

  const storedData = localStorage.getItem("formData");
  const tamañoOptions = ["Pequeño", "Mediano", "Grande"];
  const sexoOptions = ["Macho", "Hembra"];
  return (
    <AgregarMascotaRender/>
     );
};

export default AgregarMascota;
