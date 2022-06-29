import {
  TextField,
  Button,
  Alert,
  Box,
  LinearProgress
} from '@mui/material'
import { useState } from 'react';
import { useForm } from '../hooks/useForm'

import useFormStyles from '../styles/useFormFields'

const Form1 = (props) => {
  const classes = useFormStyles();
  const [error, setError] = useState(false)
  const [cargando, setCargando] = useState(false)

  const [formValues, handleInputChange] = useForm({
    name: '',
    lastName: '',
  });
  const {
    name,
    lastName,
  } = formValues;
  const onSubmit = (event) => {
    event.preventDefault()
    if (name === '' || lastName === '') {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 1000);
      return;
    }
    setCargando(true);
    setTimeout(() => {

      const data = {
        name,
        lastName,
      }
      localStorage.setItem('step1', JSON.stringify(data))
      props.updateStep(1)
    }, 1000)
  }

  return (

    <form
      onSubmit={onSubmit}
    >
      {error ?
        <Alert severity="error">Los campos marcados con * son requeridos</Alert> : ''
      }
      {cargando ?
        (
          <Box sx={{ width: '100%' }} className={classes.formField}>
            <LinearProgress />
          </Box>
        ) : ''}
      <TextField
        className={classes.formField}
        fullWidth
        required
        id="name"
        label="Nombre"
        name='name'
        defaultValue={name}
        onChange={handleInputChange}
      />

      <TextField
        className={classes.formField}
        fullWidth
        required
        id="lastName"
        name='lastName'
        label="Apellido"
        defaultValue={lastName}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        type="submit"
      >
        Siguiente
      </Button>
    </form>
  )
}

export default Form1
