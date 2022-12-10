import { useFormik } from "formik";
import { Button } from "primereact/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startFantasyTeam } from "../store/fantasy/thunks";

export const useFormCreate = () => {

    const dispatch = useDispatch();
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [cover, setCover] = useState("");

    const formik = useFormik({
        initialValues: {
          name: "",
          description: "",
        },
        validate: (data) => {
          let errors = {};
    
          if (!data.name) {
            errors.name = "Name is required.";
          }
    
          if (!data.description) {
            errors.description = "Description is required.";
          }
    
          return errors;
        },
        onSubmit: (data) => {
          setFormData(data);
          setShowMessage(true);
          const newFantasyTeam = {
            ...data,
            id: crypto.randomUUID(),
            creationDate: Date(),
            players: [],
            captain: null,
            rating: null,
            image: cover,
          };
          dispatch(startFantasyTeam(newFantasyTeam));
          formik.resetForm();
        },
      });
    
      const handleOnChangeFile = (e) => {
        const element = e.target;
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
          setCover(reader.result.toString());
        };
        reader.readAsDataURL(file);
      };
    
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

    return {
        formik,
        dialogFooter,
        getFormErrorMessage,
        handleOnChangeFile,
        showMessage,
        setShowMessage,
        formData,
        cover,
        setCover,
        isFormFieldValid
    }
}
