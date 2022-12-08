import React, { useMemo, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { Message } from "primereact/message";
import {
  startGoogleSingIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onGoogleSignIn = () => {
    dispatch(startGoogleSingIn());
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.email) {
        errors.email = "Correo electrónico es obligatorio.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Correo electrónico no válido. E.j. ejemplo@advice.com";
      }

      if (!data.password) {
        errors.password = "Contraseña es obligatoria.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      const { email, password } = data;
      setShowMessage(true);
      formik.resetForm();
      dispatch(startLoginWithEmailPassword({ email, password }));
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

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );


  return (
    <div className="form animate__animated animate__fadeInDown">
      <Dialog
        visible={showMessage}
        onHis={() => setShowMessage(false)}
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
          <h5>Registration Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your account is registered under name <b>{formData.name}</b> ; it'll
            be valid next 30 days without activation. Please check{" "}
            <b>{formData.email}</b> for activation instructions.
          </p>
        </div>
      </Dialog>

      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Iniciar Sesión</h5>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
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
                  feedback={false} 
                  className={classNames({
                    "p-invalid": isFormFieldValid("password"),
                  })}
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
            <Message
              severity="error"
              text={errorMessage}
              style={{
                display: `${!!errorMessage ? "" : "none"}`,
                marginBottom: "10px",
              }}
            />

            <span className="login-btns">
              <Button
                disabled={isAuthenticating}
                style={{ width: "150px" }}
                type="submit"
                label="Ingresar"
              />
              <Button
                disabled={isAuthenticating}
                onClick={onGoogleSignIn}
                style={{
                  width: "150px",
                  backgroundColor: "white",
                  color: "black",
                }}
                label="Google"
                className="google-btn p-button-raised p-button-text"
                icon="pi pi-google"
              />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
