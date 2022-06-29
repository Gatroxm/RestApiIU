import {
  TextField,
  Button,
  Alert,
  Box,
  LinearProgress
} from '@mui/material'
import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { createUser } from '../services/userService';

import useFormStyles from '../styles/useFormFields'

const Form2 = (props) => {
  const classes = useFormStyles()
  const [error, setError] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [ formValues, handleInputChange ] = useForm({
    
    email: '',
    phoneNumber: '',
    cc: '',
  });
  const {
    name,
    lastName,
    email,
    phoneNumber,
    cc
  } = formValues;
  const onSubmit = (event) => {
    event.preventDefault()
    if(email === '' || phoneNumber === '' || cc === ''){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 1000);
      return;
    }
    setCargando(true)
    const step1 =  JSON.parse(localStorage.getItem('step1'));
      
    const data = {
      lastName: step1.lastName,
      name: step1.name,
      email,
      phoneNumber,
      cc: parseFloat(cc)
    }
    createUser(data).then( resp => {
      if (resp.status === 200) {
        props.updateStep(0)
        props.addUser(resp.data)
        props.openAlerta('Usuario Creado con éxito')
      }
    }).catch( err => {
      console.error(err);
    })
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      {error?
        <Alert severity="error">Los campos marcados con * son requeridos</Alert>: ''
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
        type="email"
        id="email"
        name='email'
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
      <Button
        className={classes.formButtons}
        variant="outlined"
        onClick={() => props.updateStep(0)}
      >
        Anterior
      </Button>
      <Button
        variant="contained"
        type="submit"
      >
        Enviar
      </Button>
    </form>
  )
}

export default Form2
