import { TextField, Typography } from '@mui/material';
import React from 'react';

interface SingInComponentProps {
  formData: {
    name: string;
    address: string;
    city: string;
    phoneNumber: string;
  };
  onTextFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpStepTwoComponent: React.FC<SingInComponentProps> = ({ formData, onTextFieldChange }) => {
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
          value={formData.name}
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
          value={formData.address}
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
          value={formData.city}
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
          value={formData.phoneNumber}
          fullWidth
          margin="normal"
          id="phone"
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
