import React from "react";
import { Formik, Form} from "formik";
import { Button } from "@nextui-org/react";
import styles from "./AgregarMascota.module.css";
import FormInput from "../FormInput/FormInput";
import FormTextarea from "../FormTextarea/FormTextarea";
import FormSelect from "../FormSelect/FormSelect";
import SubirImagenes from "../SubirImagenes/SubirImagenes";
import agregarMascotaSchema from "../../Schemas/agregarMascotaSchema";

const validationSchema = agregarMascotaSchema;

const AgregarMascotaRender = () => {

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={storedData ? JSON.parse(storedData) : mascota}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, values }) => (
          <div className={styles.form}>
            <Form onChange={handleFormChange(values)}>
              <div className={styles.tittle}>
                <h1>Agrega una nueva mascota</h1>
              </div>
              <div>
                <FormInput
                  label="Nombre"
                  name="nombre"
                  placeholder="Nombre"
                  error={errors.nombre}
                />
              </div>
              {console.log(localStorage)}
              <div>
                <FormInput
                  label="Especie"
                  name="especie"
                  error={errors.especie}
                  placeholder="Especie"
                />
              </div>
              <div>
                <FormInput
                  label="Edad"
                  placeholder="Edad"
                  name="edad"
                  error={errors.edad}
                />
              </div>
              <div>
                <FormInput
                  label="Peso"
                  placeholder="Peso"
                  name="peso"
                  error={errors.peso}
                />
              </div>
              <div>
                <FormInput
                  label="Raza"
                  placeholder="Raza"
                  name="raza"
                  error={errors.raza}
                />
              </div>
              <div>
                <FormTextarea
                  label="Descripción"
                  name="descripcion"
                  placeholder="Descripción"
                  error={errors.descripcion}
                />
              </div>

              <div className={styles.selectContainer}>
                {console.log(tamañoOptions)}
                <div>
                  <FormSelect
                    label="Tamaño"
                    name="tamano"
                    placeholder="Tamaño"
                    error={errors.tamano}
                    optionArray={tamañoOptions}
                  />
                </div>
                <div>
                  <FormSelect
                    label="Sexo"
                    name="sexo"
                    placeholder="Sexo"
                    error={errors.sexo}
                    optionArray={sexoOptions}
                  />
                </div>
              </div>
              <div>
                <SubirImagenes
                  setImagenes={(imagenes) =>
                    setMascota({ ...mascota, foto: imagenes })
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {imagenes &&
                  imagenes.map((imag) => {
                    return (
                      <img
                        onClick={() => handleClickImages(imag)}
                        src={imag}
                        alt=""
                        className="h-[80px] m-[15px]"
                      />
                    );
                  })}
              </div>
              <div className={styles.button}>
                <Button
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                  size="lg"
                >
                  Enviar
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AgregarMascotaRender;
