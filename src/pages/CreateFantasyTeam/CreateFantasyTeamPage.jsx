import React, { useMemo, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { Message } from "primereact/message";
import { toggleLoginRegister } from "../../store/loginregister/loginRegisterSlice";
import { setCorrectRegister, setIncorrectRegister } from "../../store/auth/authSlice";
import { FantasyLayout } from "../../ui/FantasyLayout";

export const CreateFantasyTeamPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const { status, errorMessage, correctRegister } = useSelector((state) => state.auth);
  


  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [errorMessage]
  );

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      accept: false
    },
    validate: (data) => {
      let errors = {};

      if (!data.displayName) {
        errors.displayName = "Nombre es obligatorio.";
      }

      if (!data.email) {
        errors.email = "Correo electrónico es obligatorio.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Correo electrónico no válido. E.j. ejemplo@advice.com";
      }

      if (!data.password) {
        errors.password = "Contraseña es obligatoria.";
      } else if(
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(data.password)
      ){
        errors.password = "Debe incluir mínimo 8 caracteres 1 número y 1 letra en mayúscula/minúscula."
      }

      if (!data.accept) {
        errors.accept = "Debes de aceptar los términos y condiciones.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      const { email, password, displayName } = data;
      dispatch( startCreatingUserWithEmailPassword({ email, password, displayName }));
      if( correctRegister ){
        setShowMessage(true);
      }
      else{
        formik.resetForm();
      }
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  const closeDialog = ()=>{
    if(correctRegister){
      setShowMessage(false)
      dispatch(toggleLoginRegister())
      dispatch(setIncorrectRegister())
      formik.resetForm();
    }
    else{
      setShowMessage(false)
    }
  }

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={closeDialog}
      />
    </div>
  );
  const passwordHeader = <h6>Elegi tu Contraseña</h6>;
  const passwordFooter = (
    <>
      <Divider />
      <p className="mt-2">Recomendaciones</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>Al menos una letra en mayúscula</li>
        <li>Al menos una letra en minúscula</li>
        <li>Al menos un número</li>
        <li>No debe incluir caracteres especiales</li>
        <li>Mínimo de 8 caracteres</li>
      </ul>
    </>
  );

  return (
    <FantasyLayout>
  <div className="form animate__animated animate__fadeInDown">
      <Dialog
        visible={showMessage}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
              <h2 style={{ textAlign:'center'}}>¡Tu cuenta ha sido creada!</h2>
              <h1 style={{textAlign:'center'}}> 😎😎 </h1>
              <h3 style={{textAlign:'center'}}>Ahora inicia sesión</h3>
        </div>
      </Dialog>

      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Crear cuenta</h5>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="displayName"
                  name="displayName"
                  value={formik.values.displayName}
                  onChange={formik.handleChange}
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("displayName"),
                  })}
                />
                <label
                  htmlFor="displayName"
                  className={classNames({
                    "p-error": isFormFieldValid("displayName"),
                  })}
                >
                  Nombre*
                </label>
              </span>
              {getFormErrorMessage("displayName")}
            </div>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("email"),
                  })}
                />
                <label
                  htmlFor="email"
                  className={classNames({
                    "p-error": isFormFieldValid("email"),
                  })}
                >
                  Correo electrónico*
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <Password
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  toggleMask
                  className={classNames({
                    "p-invalid": isFormFieldValid("password"),
                  })}
                  header={passwordHeader}
                  footer={passwordFooter}
                />
                <label
                  htmlFor="password"
                  className={classNames({
                    "p-error": isFormFieldValid("password"),
                  })}
                >
                  Contraseña*
                </label>
              </span>
              {getFormErrorMessage("password")}
            </div>
            <div className="field-checkbox">
              <Checkbox
                inputId="accept"
                name="accept"
                checked={formik.values.accept}
                onChange={formik.handleChange}
                className={classNames({
                  "p-invalid": isFormFieldValid("accept"),
                })}
              />
              <label
                htmlFor="accept"
                className={classNames({
                  "p-error": isFormFieldValid("accept"),
                })}
              >
                Acepto los términos y condiciones*
              </label>
            </div>
            <Message
              severity="error"
              text="Correo electrónico ya esta en uso"
              style={{
                display: `${errorMessage? "" : "none"}`,
                marginBottom: "10px",
                marginTop: "10px",
              }}
            />
            <Button
                disabled={isCheckingAuthentication}
                type="submit"
                label="Registrarse"
                style={{
                marginTop: "15px",
              }}
            />
          </form>
        </div>
      </div>
    </div>
    </FantasyLayout>
  
  );
};
