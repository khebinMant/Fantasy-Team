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
                style={{ textAlign:'center', marginTop:"20px", fontSize: "4rem", color: "var(--green-500)" }}
              ></i>
              <h2  style={{ textAlign:'center'}}>Equipo creado satisfactoriamente</h2>
              <h1 style={{textAlign:'center'}}> 😎😎 </h1>
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
                    Nombre*
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
                    Descripción*
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
