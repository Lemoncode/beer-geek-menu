import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { mainTheme } from '#core/theme/main.theme.js';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';

interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const SignInComponent: React.FC<Props> = props => {
  const { handleSubmit } = props;
  const spacing = mainTheme.spacing;

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mb: spacing(4),
          }}
        >
          Acceder
        </Typography>

        <FormControl
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            width: '100%',
          }}
        >
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
              mb: spacing(2),
            }}
          />

          <TextField
            required
            fullWidth
            id="password"
            label="Contraseña"
            name="password"
            autoComplete="current-password"
            sx={{
              mb: spacing(5),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mb: spacing(5),
            }}
          >
            Entrar
          </Button>
        </FormControl>
        <Link href="#" variant="body2">
          ¿Olvidaste tu contraseña?
        </Link>
      </Box>
    </>
  );
};
