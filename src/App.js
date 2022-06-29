import {
  useState,
  useEffect
} from 'react'

import {
  Alert,
  Container,
  Step,
  Stepper,
  StepLabel,
  Box,
  Grid
} from '@mui/material'


import Form1 from './components/Form1'
import Form2 from './components/Form2'
import TableData from './components/Table'
import useUsers from './hooks/useUsers'
import { getUsers } from './services/userService'


const App = () => {
  const [step, setStep] = useState(0)
  const [usersRender, setUsersRender] = useState([])
  const [message, setMessage] = useState('');
  const [alerta, setAlerta] = useState(false)
  useEffect(() => {
    getUsers(0,5).then( resp => {
      console.log('hola')
      if( resp.status === 200) {
        setUsersRender(resp.data);
        localStorage.setItem('registros', '5');
      }
    })
 }, [])
  const updateStep = (step) => {
    
    setStep(step)
    
  }
  const addUser = (user) => {
      setUsersRender([...usersRender, user])
  }

  const next =  () => {
    if(localStorage.getItem('registros')){
      if(usersRender.length >= 5){
        const skip = parseFloat(localStorage.getItem('registros'));
        const limit = parseFloat(localStorage.getItem('registros')) + 5;
        getUsers(skip,limit).then( resp => {
          if( resp.status === 200) {
            setUsersRender(resp.data);
            localStorage.setItem('registros', `${limit}`);
          }
        });
      }
    }
  }
  const back = () => {
    if(localStorage.getItem('registros')){
      const registros = parseFloat(localStorage.getItem('registros'));
      if (registros > 5) {
          const skip = parseFloat(localStorage.getItem('registros')) - 10;
          const limit = parseFloat(localStorage.getItem('registros')) - 5;
          getUsers(skip,limit).then( resp => {
            if( resp.status === 200) {
              setUsersRender(resp.data);
              localStorage.setItem('registros', `${limit}`);
            }
          });
      }
    }
  }

  const openAlerta = (msn) => {
    setMessage(msn);
    setAlerta(true);
    setTimeout(() => {
      setAlerta(false);
      setMessage('')
    }, 1000);
  }
  const steps = [
    {
      label: 'Paso 1',
      componente: <Form1 updateStep={updateStep}/>
    },
    {
      label: 'Paso 2',
      componente: <Form2 updateStep={updateStep} addUser={addUser} openAlerta={openAlerta}/>
    }
  ]

  return (
    <Container
      fixed
      style={{
        padding: '3em 0'
      }}
    >
      <Grid
        container
        spacing={6}
      >
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
        >
          <Stepper
            activeStep={step}
          >
            {steps.map((step, key) => (
              <Step
                key={key}
              >
                <StepLabel>
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box
            style={{
              marginTop: '4em'
            }}
          >
            {steps[step].componente}
          </Box>
        </Grid>
        <Grid
          item
          md={9}
          sm={12}
          xs={12}
        >
          {alerta?
            <Alert severity="success">{message}</Alert>
            :''
          }
          <TableData users={usersRender} next={next} back={back} openAlerta={openAlerta} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
