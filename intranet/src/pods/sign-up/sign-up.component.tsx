import { Button, TextField, Typography } from '@mui/material';

import { useState } from 'react';
import * as classes from './sign-up.styles';

export const SignUpComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    repeatEmail: '',
    password: '',
    repeatPassword: '',
  });

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const goToNextStep = () => {
    console.log('Go to next step');
    console.log({ formData });
  };

  return (
    <>
      <Typography variant="h4" component="h1">
        Crea tu carta
      </Typography>
      <div className={classes.steps}>
        <Typography variant="h5" component="h2" textAlign={'center'}>
          Paso 1 - Crear cuenta
        </Typography>
        <form>
          <TextField
            value={formData.email}
            onChange={onTextFieldChange}
            required
            id="email"
            label="Email"
            type="email"
            margin="normal"
            fullWidth
            autoComplete="username"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            value={formData.repeatEmail}
            onChange={onTextFieldChange}
            required
            id="repeatEmail"
            label="Repetir Email"
            type="email"
            margin="normal"
            fullWidth
            autoComplete="username"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            value={formData.password}
            onChange={onTextFieldChange}
            required
            id="password"
            label="Clave"
            type="password"
            margin="normal"
            fullWidth
            autoComplete="new-password"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            value={formData.repeatPassword}
            onChange={onTextFieldChange}
            required
            id="repeatPassword"
            label="Repetir Clave"
            type="password"
            margin="normal"
            fullWidth
            autoComplete="new-password"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <div className={classes.buttons}>
        <Button color="secondary" variant="contained">
          Anterior
        </Button>
        <Button variant="contained" onClick={goToNextStep}>
          Siguiente
        </Button>
      </div>
    </>
  );
};
