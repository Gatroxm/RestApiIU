import {
  useState,
  cloneElement
} from 'react'

import {
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

const steps = [
  {
    label: 'Paso 1',
    componente: <Form1 />
  },
  {
    label: 'Paso 2',
    componente: <Form2 />
  }
]

const App = () => {
  const [step, setStep] = useState(0)

  return (
    <Container
      fixed
      style={{
        padding: '3em'
      }}
    >
      <Grid
        container
        spacing={6}
      >
        <Grid
          item
          md={4}
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
          md={8}
          sm={12}
          xs={12}
        >
          <TableData />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
