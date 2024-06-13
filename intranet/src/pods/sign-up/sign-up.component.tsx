import { Button, Typography, Link } from '@mui/material';

import * as classes from './sign-up.styles';

export const SignUpComponent: React.FC = () => {
  return (
    <>
      <Typography variant="h4" component="h1">
        Crea tu cuenta
      </Typography>
      <div className={classes.steps}>{/* Components for diferents estates of sign-in */}</div>
      <div className={classes.buttons}>
        <Button color="secondary" variant="contained">
          Anterior
        </Button>
        <Button variant="contained">Siguiente</Button>
      </div>
      <Link href="/#sign-in" variant="body2">
        ¿Ya tienes una cuenta? Sign in
      </Link>
    </>
  );
};
