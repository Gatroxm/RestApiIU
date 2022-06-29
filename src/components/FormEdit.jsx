import React, { useState } from "react";
import { TextField, Button, Alert, Box, LinearProgress } from "@mui/material";
import { useForm } from "../hooks/useForm";
import useFormStyles from "../styles/useFormFields";
import { editUser } from "../services/userService";

export const FormEdit = ({user, handleClose, openAlerta}) => {
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(false);
  const classes = useFormStyles();
  const [formValues, handleInputChange] = useForm({
    _id: user._id,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    cc: user.cc,
  });
  const { _id, name, lastName, email, phoneNumber, cc } = formValues;
  const onSubmit = (event) => {
    event.preventDefault();
    if (name === '' || email === '' || phoneNumber === '' || cc === '' || lastName === '') {
        setError(true);
        return;
    } else {
        setCargando(true);
        const data = {
            _id,
            name,
            lastName,
            email,
            phoneNumber,
            cc: parseFloat(cc)
        }
        editUser(data).then( resp => {
            if (resp.status === 200) {
                handleClose(false)
                openAlerta('Edicion de usuario Exitosa')
            }
        }).catch( err => {
            console.error(err);
        });
    }
  };
  return (
    <form onSubmit={onSubmit}>
      {error ? (
        <Alert severity="error">Los campos marcados con * son requeridos</Alert>
      ) : (
        ""
      )}
      {cargando ? (
        <Box sx={{ width: "100%" }} className={classes.formField}>
          <LinearProgress />
        </Box>
      ) : (
        ""
      )}
      <TextField
        className={classes.hiddem}
        name="_id"
        defaultValue={_id}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        id="name"
        label="Nombre"
        name="name"
        defaultValue={name}
        onChange={handleInputChange}
      />

      <TextField
        className={classes.formField}
        fullWidth
        required
        id="lastName"
        name="lastName"
        label="Apellido"
        defaultValue={lastName}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        type="email"
        id="email"
        name="email"
        label="E-mail"
        defaultValue={email}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        id="phoneNumber"
        label="Teléfono"
        name="phoneNumber"
        defaultValue={phoneNumber}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        type="number"
        id="cc"
        label="Documento de identidad"
        name="cc"
        defaultValue={cc}
        onChange={handleInputChange}
      />
      <Button variant="contained" type="submit">
        Guardar
      </Button>
    </form>
  );
};
