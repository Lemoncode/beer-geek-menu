import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useSignUpContext } from '#core/providers/index.js';

const SignUpStepTwoComponent: React.FC = () => {
  const { signUpData, setRestaurants } = useSignUpContext();

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurants({ ...signUpData.restaurant, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Typography variant="h5" component="h2">
        Paso 2 - Datos Restaurante
      </Typography>
      <Typography variant="body2">
        Vamos a identificar tu restaurante, esto te permitirá también posicionarte en Google.
      </Typography>
      <form>
        <TextField
          onChange={onTextFieldChange}
          value={signUpData.restaurant.name}
          fullWidth
          margin="normal"
          id="name"
          label="Nombre"
          placeholder="Nombre"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          onChange={onTextFieldChange}
          value={signUpData.restaurant.address}
          fullWidth
          margin="normal"
          id="address"
          label="Dirección"
          placeholder="Dirección"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          onChange={onTextFieldChange}
          value={signUpData.restaurant.city}
          fullWidth
          margin="normal"
          id="city"
          label="Ciudad"
          placeholder="Ciudad"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          onChange={onTextFieldChange}
          value={signUpData.restaurant.phoneNumber}
          fullWidth
          margin="normal"
          id="phoneNumber"
          label="Teléfono contacto"
          placeholder="Teléfono contacto"
          InputLabelProps={{ shrink: true }}
          required
          type="number"
          sx={{
            '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
              display: 'none',
            },
            '& input[type=number]': {
              MozAppearance: 'textfield',
            },
          }}
        />
      </form>
    </>
  );
};

export default SignUpStepTwoComponent;
