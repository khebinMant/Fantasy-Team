import { useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";

import { FantasyLayout } from "../../ui/FantasyLayout";
import "../../styles/CreateFantasyPage.css";
import { IconButton } from "@mui/material";
import { useFormCreate } from "../../hooks/useFormCreate";

export const CreateFantasyTeamPage = () => {
  const fileInputRef = useRef();

  const {
    formik,
    dialogFooter,
    getFormErrorMessage,
    handleOnChangeFile,
    showMessage,
    setShowMessage,
    formData,
    cover,
    isFormFieldValid
  } = useFormCreate();

  return (
    <FantasyLayout>
      <div className="form">
        <Dialog
          visible={showMessage}
          onHide={() => setShowMessage(false)}
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
              Your account is registered under name <b>{formData.name}</b> ;
              it'll be valid next 30 days without activation. Please check{" "}
              <b>{formData.email}</b> for activation instructions.
            </p>
          </div>
        </Dialog>

        <div className="flex justify-content-center">
          <div className="card">
            <h5 className="text-center">Crea tu Equipo de fantasía</h5>
            <form onSubmit={formik.handleSubmit} className="p-fluid">
              <div className="field">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                    className={classNames({
                      "p-invalid": isFormFieldValid("name"),
                    })}
                  />
                  <label
                    htmlFor="name"
                    className={classNames({
                      "p-error": isFormFieldValid("name"),
                    })}
                  >
                    Name*
                  </label>
                </span>
                {getFormErrorMessage("name")}
              </div>
              <div className="field">
                <span className="p-float-label p-input-icon-right">
                  <i className="pi pi-envelope" />
                  <InputText
                    id="description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": isFormFieldValid("description"),
                    })}
                  />
                  <label
                    htmlFor="description"
                    className={classNames({
                      "p-error": isFormFieldValid("description"),
                    })}
                  >
                    Description*
                  </label>
                </span>
                {getFormErrorMessage("description")}
              </div>
              <div className="field">
                <span className="p-float-label">
                  <IconButton
                    color="primary"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <i
                      className="pi pi-cloud-upload"
                      style={{ fontSize: "2em" }}
                    ></i>
                  </IconButton>
                  <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: "none" }}
                    name="cover"
                    onChange={handleOnChangeFile}
                  />
                  <div>
                    {!!cover ? (
                      <img src={cover} width="200" alt="book-img" />
                    ) : (
                      <></>
                    )}
                  </div>
                </span>
              </div>

              <Button type="submit" label="Crear" className="mt-2" />
            </form>
          </div>
        </div>
      </div>
    </FantasyLayout>
  );
};
